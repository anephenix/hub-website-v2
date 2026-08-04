---
title: Security - Restricting connection origins and IP addresses
description: This page describes how to restrict where WebSocket connections can come from
---

You can restrict where WebSocket connections are allowed to come from, either by origin or by IP address.

## Restricting by origin

Pass an array of allowed url origins to the `allowedOrigins` option:

```javascript
import Hub from '@anephenix/hub';

const hub = await new Hub({
	port: 4000,
	allowedOrigins: ['landscape.anephenix.com'],
});
```

Any connection attempt from a website not hosted on `landscape.anephenix.com` will be closed by the server.

## Restricting by IP address

Alternatively, restrict the IP addresses that clients can connect from using `allowedIpAddresses`:

```javascript
import Hub from '@anephenix/hub';

const hub = await new Hub({ port: 4000, allowedIpAddresses: ['76.76.21.21'] });
```

## Next steps

- [Kicking clients](/documentation/kicking-clients)
