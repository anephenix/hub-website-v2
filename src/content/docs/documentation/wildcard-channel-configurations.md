---
title: Advanced PubSub - Wildcard channel configurations
description: This page describes how to apply a channel configuration across a range of channels using wildcards
---

Sometimes you want to apply the same configuration (such as authentication) across a range of channels, without adding a separate configuration for each one. Hub supports this with wildcard channel configurations.

For example, say you have channels named like this:

- `dashboard_IeK0iithee`
- `dashboard_aipe0Paith`
- `dashboard_ETh2ielah1`

Rather than adding a channel configuration for each one, you can add a single wildcard configuration using `*` as the matching character:

```javascript
const channel = 'dashboard_*';

const authenticate = ({ socket, data }) => {
	// For authentication specific to each channel, the channel name
	// is available in the data object.
	if (isAllowed(data.channel, socket.clientId)) return true;
};

hub.pubsub.addChannelConfiguration({ channel, authenticate });
```

The `dashboard_*` configuration will then apply to every channel whose name contains `dashboard_`.

This works with any channel configuration option, not just `authenticate` — including `clientCanPublish` (see [enabling/disabling client publish](/documentation/enabling-disabling-client-publish)).

## Next steps

- [Enabling/disabling client publish](/documentation/enabling-disabling-client-publish)
