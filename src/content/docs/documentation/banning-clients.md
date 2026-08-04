---
title: Security - Banning clients
description: This page describes how to ban a client from reconnecting to the server
---

If kicking a client isn't enough — for example, if you want to stop it from reconnecting at all — you can ban it instead, using `hub.kickAndBan`:

```javascript
// Let's take the 1st client in the list of connected clients as an example
const ws = Array.from(hub.wss.clients)[0];

// Call kickAndBan
await hub.kickAndBan({ ws });
```

This kicks the client immediately, and if it attempts to reconnect afterwards, the server will automatically kick it again on connection, based on the [ban rules](/documentation/managing-ban-rules) stored for it.

## Next steps

- [Managing ban rules](/documentation/managing-ban-rules)
