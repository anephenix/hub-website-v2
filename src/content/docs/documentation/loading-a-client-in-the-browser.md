---
title: Loading a client in the browser
description: Instructions for how to load a client in the web browser
---

To load a client, you need to ensure that the Hub library is installed in your project.

Once it is installed, you can load the `HubClient` like this:

```javascript
import HubClient from '@anephenix/hub/client';
```

The next thing that you will want to do is instantiate an instance of HubClient that is connecting to the server:

```javascript
const hubClient = new HubClient({ url: 'ws://localhost:4000' });
```

This will instantiate an instance of `HubClient`, which will attempt to connect to the server right from the start.

In order to ensure that hubClient is ready before attempting to make any calls with it, you'll want to add this await call in the code immediately afterwards:

```javascript
// Wait for the client to connect and set the client ID
await hubClient.isReady();
```

Once this is done, then the hubClient is good for making calls.

## How do I use this with other frontend frameworks like React?

Good point. I will take a look at providing some examples using React in a short while.