---
title: Loading a client in Node.js
description: Instructions for how to load a client in Node.js
---

Traditionally WebSocket clients connect from the web browser, but with Hub it is possible to create a WebSocket client from a program running in Node.js. Here is an example:

```javascript
// Dependencies
import HubClient from "@anephenix/hub/client";

// Initialise the client
const hubClient = new HubClient({ url: 'ws://localhost:3000' });

// Wait for the client to connect and set client ID
await hubClient.isReady();
```