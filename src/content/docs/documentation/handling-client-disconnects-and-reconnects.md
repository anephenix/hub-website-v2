---
title: Advanced PubSub - Handling client disconnects and reconnects
description: This page describes how Hub handles clients disconnecting and reconnecting
---

Hub automatically takes care of channel subscriptions across disconnects and reconnects, so you don't have to manage that state yourself.

## On disconnect

When a client disconnects from the server, the server automatically unsubscribes it from any channels it was subscribed to. This means the list of clients subscribed to a channel is always kept up to date, even if a client disconnects unexpectedly.

## On reconnect

When a client reconnects to the server, the client automatically resubscribes to the channels it was subscribed to before the disconnect. The client maintains its own list of subscribed channels, which you can inspect at any time:

```javascript
hubClient.channels;
```

This makes it safe to build features on top of PubSub without needing to write your own reconnection/resubscription logic.

## Next steps

- [Client/channel subscription data stores](/documentation/client-channel-subscription-data-stores)
