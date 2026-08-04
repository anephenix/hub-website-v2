---
title: PubSub - Unsubscribing from a channel
description: This page describes how to unsubscribe a client from a channel
---

To unsubscribe a client from a channel, call `hubClient.unsubscribe`:

```javascript
await hubClient.unsubscribe('news');
```

After this, the client will no longer receive messages published to the `news` channel.

If the client disconnects from the server without explicitly unsubscribing, Hub will automatically unsubscribe it from any channels it was subscribed to (see [handling client disconnects and reconnects](/documentation/handling-client-disconnects-and-reconnects)).

## Next steps

- [Publishing a message from the client](/documentation/publishing-a-message-from-the-client)
