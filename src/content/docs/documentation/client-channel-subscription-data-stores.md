---
title: Advanced PubSub - Client/channel subscription data stores
description: This page describes how Hub stores client/channel subscription data, and how to configure it to use Redis
---

Hub needs somewhere to keep track of which clients are subscribed to which channels. By default, it stores this data in memory.

This makes it easy to get started, since there's nothing extra to set up. However, in-memory storage has two limitations:

- If the Node.js process running Hub restarts, the subscription data is lost.
- It only works for a single server instance — it can't be shared across multiple Hub servers.

## Using Redis

For production use, we recommend configuring Hub to use [Redis](https://redis.io) as the data store:

```javascript
const hub = new Hub({
	port: 4000,
	dataStoreType: 'redis',
	dataStoreOptions: {
		channelsKey: 'channels', // by default it is hub-channels
		clientsKey: 'clients', // by default it is hub-clients
		/*
		 * This is the same config options object that can be passed to
		 * the redis NPM module, with details here:
		 * https://www.npmjs.com/package/redis#options-object-properties
		 */
		redisConfig: {
			db: 1,
		},
	},
});
```

## Horizontal scaling

Using the Redis data store also enables horizontal scaling of Hub across multiple servers.

For example, say you have two instances of Hub (server A and server B), and two clients (client A and client B), both subscribed to the `news` channel.

If a message is published to `news` via server A, the message will be received by both server A and server B, and each server will deliver it to the clients connected to it that are subscribed to that channel — in this case, both client A and client B.

This means you don't need to worry about which clients are connected to which server, or which server handled a given publish call. You can run multiple Hub instances across multiple servers behind a load balancer, and let the load balancer handle availability (routing new connections to available servers, and re-routing reconnection attempts if a server goes offline).

## Next steps

- [Authenticated channels](/documentation/authenticated-channels)
