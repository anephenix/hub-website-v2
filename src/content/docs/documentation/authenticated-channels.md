---
title: Advanced PubSub - Authenticated channels
description: This page describes how to create channels that require authentication to subscribe to
---

There will likely be cases where you only want some clients to be able to subscribe to a channel. Hub supports this with channel configurations.

On the server, add a channel configuration with an `authenticate` function:

```javascript
const channel = 'internal_announcements';

/*
 * This function is called every time a client tries to subscribe to
 * the channel.
 */
const authenticate = ({ socket, data }) => {
	// You have access to the socket of the client and the data they
	// passed in the subscribe request.
	//
	// isAllowed and isValidToken are example functions that you would
	// define yourself to perform the backend authentication check.
	if (isAllowed(data.channel, socket.clientId)) return true;
	if (isValidToken(data.token)) return true;
	// The function must return true if the client is allowed to subscribe
};

hub.pubsub.addChannelConfiguration({ channel, authenticate });
```

On the client, pass any additional data needed to authenticate the subscription request:

```javascript
const channel = 'internal_announcements';
const token = 'ahghaCeciawi5aefi5oolah6ahc8Yeeshie5opai';

await hubClient.subscribe(channel, { token });
```

If `authenticate` doesn't return `true`, the subscription request is rejected.

## Next steps

- [Wildcard channel configurations](/documentation/wildcard-channel-configurations)
