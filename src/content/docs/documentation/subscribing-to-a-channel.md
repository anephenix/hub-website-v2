---
title: PubSub - Subscribing to a channel
description: This page describes how to subscribe a client to a channel
---

Hub supports PubSub (Publish/Subscribe), where clients subscribe to named channels and then receive any messages published to them.

To subscribe a client to a channel, call `hubClient.subscribe`:

```javascript
await hubClient.subscribe('news');
```

Once subscribed, the client will receive any messages published to the `news` channel (see [handling messages for a channel](/documentation/handling-messages-for-a-channel)).

The server keeps track of which clients are subscribed to which channels, so that it knows who to deliver published messages to.

## Next steps

- [Unsubscribing from a channel](/documentation/unsubscribing-from-a-channel)
- [Handling messages for a channel](/documentation/handling-messages-for-a-channel)
