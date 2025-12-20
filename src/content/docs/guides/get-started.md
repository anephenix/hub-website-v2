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

TODO - WIP

