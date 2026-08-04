---
title: Security - Kicking clients
description: This page describes how to kick a misbehaving client from the server
---

There may be cases where a client is misbehaving and you want to disconnect it from the server. You can do that with `hub.kick`:

```javascript
// Let's take the 1st client in the list of connected clients as an example
const ws = Array.from(hub.wss.clients)[0];

// Call kick
await hub.kick({ ws });
```

This disables the client's automatic WebSocket reconnection behaviour and closes the connection.

Note that this only stops the *official* client code from reconnecting — if the person operating the client is comfortable modifying JavaScript, they could override the client code to attempt reconnection anyway. If you need to prevent that too, see [banning clients](/documentation/banning-clients).

## Next steps

- [Banning clients](/documentation/banning-clients)
