---
title: PubSub - Publishing a message from the server
description: This page describes how to publish a message to a channel from the server
---

The server can also publish messages to a channel, using `hub.pubsub.publish`:

```javascript
const channel = 'news';
const message = 'And cake too!';

(async () => {
	await hub.pubsub.publish({
		data: { channel, message },
	});
})();
```

Every client subscribed to the `news` channel will receive the message, which is useful for things like server-initiated notifications, broadcasting state changes, or relaying data from other backend systems.

## Next steps

- [Handling messages for a channel](/documentation/handling-messages-for-a-channel)
