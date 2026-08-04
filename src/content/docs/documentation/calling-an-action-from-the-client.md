---
title: RPC - Calling an action from the client
description: This page describes how to call an RPC action from the client
---

Once an RPC action has been added on the server (see [creating an action on the server](/documentation/creating-an-action-on-the-server)), you can call it from the client using `hubClient.rpc.send`.

Here is an example of calling the `get-price` action from the previous page, to get the price of ethereum:

```javascript
// Setup a request to get the price of ethereum
const request = {
	action: 'get-price',
	data: { cryptocurrency: 'ethereum' },
};

// Send that RPC request to the server
const { cryptocurrency } = await hubClient.rpc.send(request);

// Log the response from the data
console.log({ cryptocurrency });
```

`hubClient.rpc.send` returns a promise that resolves with the `data` that the server replied with.

## Next steps

- [Creating an action on the client](/documentation/creating-an-action-on-the-client)
- [Calling an action without a response](/documentation/calling-an-action-without-a-response)
