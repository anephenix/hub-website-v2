---
title: Starting a server
description: Instructions for starting a Hub server
---

You can run the WebSocket server with this code snippet saved at `server.js`:

```javascript
// Dependencies
import Hub from '@anephenix/hub';

// Initialize hub to listen on port 4000
const hub = new Hub({ port: 4000 });

// Start listening
hub.listen();
```

If you then run the script in your terminal:

```shell
node server.js
```

You will get a Hub server that is running a WebSocket server accessible at [ws://localhost:4000](ws://localhost:4000).