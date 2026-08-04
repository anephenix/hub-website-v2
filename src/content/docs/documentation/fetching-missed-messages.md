---
title: Advanced PubSub - Fetching missed messages
description: This page describes how clients can catch up on messages that were published to a channel while they were disconnected
---

Resubscribing on reconnect (see [handling client disconnects/reconnects](/documentation/handling-client-disconnects-and-reconnects)) only restores the subscription — any messages published to a channel while the client was offline are not resent automatically.

To catch up on those, Hub lets you plug in a function on the server that knows how to look up missed messages for a channel (from wherever your app stores its message history), and lets the client ask for them once it's back online.

## Registering a handler on the server

Add a channel configuration with a `fetchMissedMessages` function:

```javascript
const channel = 'news';

const fetchMissedMessages = async ({ clientId, channel, lastMessageId }) => {
	// lastMessageId is whatever the client last saw for this channel (or
	// undefined if it never received one). Look up anything published
	// after that from wherever you store your message history, and return
	// it as an array of { id, message } objects.
	const rows = await db.news.findAfter(lastMessageId);
	return rows.map((row) => ({ id: row.id, message: row.body }));
};

hub.pubsub.addChannelConfiguration({ channel, fetchMissedMessages });
```

Hub doesn't own message persistence itself, so it's up to your app to supply this function, backed by whatever message store you already use.

## Fetching missed messages from the client

Call `hubClient.fetchMissedMessages`:

```javascript
// Defaults to fetching for every channel the client is currently
// subscribed to
await hubClient.fetchMissedMessages();

// Or fetch for specific channels only
await hubClient.fetchMissedMessages(['news']);
```

By default, each missed message is delivered back to the client one at a time through the usual channel message handlers (see [handling messages for a channel](/documentation/handling-messages-for-a-channel)), tagged with a `catchup` flag so you can tell them apart from live messages if you need to:

```javascript
const newsUpdates = (message, { catchup } = {}) => {
	console.log({ message, catchup });
};
hubClient.addChannelMessageHandler('news', newsUpdates);
```

## Receiving missed messages in bulk

If you would rather receive all of the missed messages at once instead of as individual events, pass `delivery: 'bulk'`, either per call:

```javascript
const { messages } = await hubClient.fetchMissedMessages(['news'], {
	delivery: 'bulk',
});
// messages is keyed by channel: { news: [{ id, message }, ...] }
```

or as a default for the client:

```javascript
const hubClient = new HubClient({
	url: 'ws://localhost:4000',
	missedMessagesDelivery: 'bulk',
});
```

## Tracking the last message id for a channel

For the client to tell the server where it left off, it needs to know how to read an id out of the messages it receives for a channel. Pass a `getMessageId` function when subscribing:

```javascript
await hubClient.subscribe('news', {
	getMessageId: (message) => message.id,
});
```

Hub uses this to keep track of the last message id seen for each channel, and sends it along with the next `fetchMissedMessages` call.

## Automatically fetching missed messages on reconnect

If you would rather not call `fetchMissedMessages` manually after every reconnect, set `autoFetchMissedMessages` when creating the client, and it will be called automatically after the client resubscribes to its channels:

```javascript
const hubClient = new HubClient({
	url: 'ws://localhost:4000',
	autoFetchMissedMessages: true,
});
```

## Next steps

- [Client/channel subscription data stores](/documentation/client-channel-subscription-data-stores)
