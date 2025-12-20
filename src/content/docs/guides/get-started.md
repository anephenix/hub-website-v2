---
title: Get started
description: This is a guide for getting started with Hub
---

This is a quick walkthrough to getting started with Hub.

## Install

You can install Hub via NPM:

```shell
npm i @anephenix/hub
```

## Creating a server

You can run a Node.js server with a server.js file that looks like this:

```javascript
// Dependencies
import Hub from '@anephenix/hub';

// Initialize hub to listen on port 4000
const hub = new Hub({ port: 4000 });

// Start listening
hub.listen();
```

And then run that file using Node.js

```shell
node server.js
```

Tbe WebSocket server will be listening on [ws://localhost:4000](ws://localhost:4000).

## Creating a client on the web

In your web application, you will need to install the Hub package (see [install](#install)). 

Then, you will want to embed this code in your frontend code:

```javascript
import HubClient from '@anephenix/hub/client';

/* 
    Create an instance of HubClient that connects to the
    WebSocket server running on port 4000
*/
const hubClient = new HubClient({ url: 'ws://localhost:4000' });

// Wait for the client to connect and set the client ID
await hubClient.isReady();
```

## Creating a client that runs in Node.js

With Hub, you can also create a client that will connect from 
a server-side environment (Node.js in this case).

Here is an example that can run a REPL. Save it at `node-client.js`:

```javascript
// Dependencies
import repl from 'node:repl';
import HubClient from "@anephenix/hub/client";

// Initialise the client
const hubClient = new HubClient({ url: 'ws://localhost:4000' });

// Wait for the client to connect and set client ID
await hubClient.isReady();

// Start the REPL and make hubClient available
const replInstance = repl.start('> ');
replInstance.context.hubClient = hubClient;
```

And then run it via Node.js:

```shell
node node-client.js
```

You will have a Node.js REPL running and you can run commands like this to print out the client ID:

```shell
> hubClient.getClientId();
```

You can use the WebSocket client running on Node.js to do a number of things:

- Run as a UI for a terminal-based chat application
- Send and receive data between the server and clients (records, files)
- Display data in a terminal UI (live newsfeed, stats)

## Next steps

This gives you a starting guide to getting the code running on your computer.

Hub comes with a lot of features. To learn more about them, checkout the [documentation](/documentation/).