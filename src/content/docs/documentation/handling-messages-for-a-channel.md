---
title: PubSub - Handling messages for a channel
description: This page describes how to handle messages published to a channel
---

Once a client is subscribed to a channel, you'll want to do something with the messages published to it. You can add a handler function with `hubClient.addChannelMessageHandler`:

```javascript
const channel = 'weather';

const weatherUpdates = (message) => {
	const { temperature, conditions, humidity, wind } = message;
	console.log({ temperature, conditions, humidity, wind });
};

hubClient.addChannelMessageHandler(channel, weatherUpdates);
```

Every time a message is published to the `weather` channel, `weatherUpdates` will be called with that message.

You can add multiple handlers to the same channel, and each one will be called when a message arrives.

## Next steps

- [Removing message handlers](/documentation/removing-message-handlers)
