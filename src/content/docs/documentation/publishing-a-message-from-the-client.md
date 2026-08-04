---
title: PubSub - Publishing a message from the client
description: This page describes how to publish a message to a channel from the client
---

To publish a message to a channel from the client, call `hubClient.publish`:

```javascript
await hubClient.publish('news', 'Some biscuits are in the kitchen');
```

Every client subscribed to the `news` channel (including the sender, by default) will receive the message.

If you want to send the message to all other subscribers but exclude the sender, pass `true` as a third argument:

```javascript
await hubClient.publish('news', 'Some biscuits are in the kitchen', true);
```

## Next steps

- [Publishing a message from the server](/documentation/publishing-a-message-from-the-server)
- [Enabling/disabling client publish](/documentation/enabling-disabling-client-publish)
