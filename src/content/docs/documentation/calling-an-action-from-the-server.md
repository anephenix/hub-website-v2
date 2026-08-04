---
title: RPC - Calling an action from the server
description: This page describes how to call an RPC action defined on the client from the server
---

Once a client has defined an RPC action (see [creating an action on the client](/documentation/creating-an-action-on-the-client)), the server can call it too.

To do that, the server needs a reference to the connected client's WebSocket, and can then use `hub.rpc.send`:

```javascript
// Fetch a WebSocket client, the first in the list
const ws = hub.wss.clients.values().next().value;

// Make an RPC request to that WebSocket client
const response = await hub.rpc.send({
	ws,
	action: 'get-environment',
});
```

This calls the `get-environment` action that the client defined, and waits for the client to reply.

This is useful in cases where the server needs information that only lives on the client, such as diagnostics about the environment the client is running in.

## Next steps

- [Calling an action without a response](/documentation/calling-an-action-without-a-response)
