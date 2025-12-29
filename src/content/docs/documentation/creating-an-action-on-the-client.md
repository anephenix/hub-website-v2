---
title: RPC - Creating an action on the client
description: This page describes how to create an RPC action on the client
---

Usually RPC is considered as a client calling something on the server and getting a response.

However, it is possible to create RPC actions on the client that can be called by the server.

Here is an example:

```javascript
// Create an RPC function to call on the client
const getEnvironment = ({ reply }) => {
	// Get some details from a Node.js-based Hub client running somewhere
	const { arch, platform, version } = process;
	reply({ data: { arch, platform, version } });
};
// Add that function for the 'get-environment RPC call'
hubClient.rpc.add('get-environment', getEnvironment);
```

The client has defined an RPC function that can be called by the server like this:

```javascript
// Fetch a WebSocket client, the first in the list
const ws = hubServer.wss.clients.values().next().value;
// Make an RPC request to that WebSocket client
const response = await hubServer.rpc.send({
	ws,
	action: 'get-environment',
});
```