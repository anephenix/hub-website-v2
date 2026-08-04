---
title: Advanced PubSub - Enabling/disabling client publish
description: This page describes how to restrict which clients can publish messages to a channel
---

By default, clients can publish messages to any channel they're subscribed to. There may be channels where you don't want that — either for all clients, or only for some of them.

## Disabling publish for all clients

Set the `clientCanPublish` boolean flag to `false` when adding a channel configuration:

```javascript
const channel = 'announcements';
hub.pubsub.addChannelConfiguration({ channel, clientCanPublish: false });
```

Now only the server can publish messages to the `announcements` channel — client publish attempts will be rejected.

## Disabling publish on a per-client basis

If you need finer-grained control, pass a function instead of a boolean. It receives the publish `data` and the client's `socket`, and should return `true` or `false`:

```javascript
const channel = 'panel_discussion';

const clientCanPublish = ({ data, socket }) => {
	// isAllowed and isSafeToPublish are example functions that you
	// would define yourself.
	return isAllowed(socket.clientId) && isSafeToPublish(data.message);
};

hub.pubsub.addChannelConfiguration({ channel, clientCanPublish });
```

## Next steps

- [Using a secure server](/documentation/using-a-secure-server)
