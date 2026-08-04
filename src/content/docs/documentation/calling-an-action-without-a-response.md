---
title: RPC - Calling an action without a response
description: This page describes how to make an RPC call without wanting a reply back
---

In some cases you might want to make an RPC request but not get a reply back, such as sending an API key to a client. You can do that by passing a `noReply` boolean to the `rpc.send` call:

```javascript
const response = await hub.rpc.send({
	ws,
	action: 'set-api-key',
	data: { apiKey: 'eKam2aa3dah2jah4UtheeFaiPo6xahx5ohrohk5o' },
	noReply: true,
});
```

The response will be a `null` value, and the RPC action on the receiving end does not need to call `reply` at all.

This works the same way whether the call is made from the server to the client, or from the client to the server.

## Next steps

- [PubSub - Subscribing to a channel](/documentation/subscribing-to-a-channel)
