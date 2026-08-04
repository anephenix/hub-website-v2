---
title: PubSub - Removing message handlers
description: This page describes how to remove message handlers for a channel
---

If you no longer need a handler to run for a channel, you can remove it with `hubClient.removeChannelMessageHandler`, by passing the same function reference that was used to add it:

```javascript
hubClient.removeChannelMessageHandler(channel, weatherUpdates);
```

You can also remove a handler by referring to its function name, which is useful when the reference to the original function isn't available:

```javascript
function logger(message) {
	console.log({ message });
}

hubClient.removeChannelMessageHandler(channel, 'logger');
```

## Next steps

- [Handling client disconnects and reconnects](/documentation/handling-client-disconnects-and-reconnects)
