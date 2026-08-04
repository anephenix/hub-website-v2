---
title: Security - Using a secure server
description: This page describes how to run Hub over a secure HTTPS/WSS connection
---

By default, Hub initialises a plain HTTP server to attach the WebSocket server to. For production use, we recommend using HTTPS so that connections are secure.

Hub supports this in two ways.

## Passing an existing HTTPS server

You can create your own `https` server and pass it to Hub:

```javascript
import https from 'node:https';
import fs from 'node:fs';
import Hub from '@anephenix/hub';

const serverOptions = {
	key: fs.readFileSync('PATH_TO_SSL_CERTIFICATE_KEY_FILE'),
	cert: fs.readFileSync('PATH_TO_SSL_CERTIFICATE_FILE'),
};

const httpsServer = https.createServer(serverOptions);

const hub = await new Hub({ port: 4000, server: httpsServer });
```

## Letting Hub create the HTTPS server

Alternatively, pass `'https'` as the `serverType`, along with the `serverOptions`, and let Hub create the server for you:

```javascript
import fs from 'node:fs';
import Hub from '@anephenix/hub';

const serverOptions = {
	key: fs.readFileSync('PATH_TO_SSL_CERTIFICATE_KEY_FILE'),
	cert: fs.readFileSync('PATH_TO_SSL_CERTIFICATE_FILE'),
};

const hub = await new Hub({ port: 4000, serverType: 'https', serverOptions });
```

Either way, once Hub is running over HTTPS, clients need to connect using `wss://` instead of `ws://`.

## Next steps

- [Restricting connection origins and IP addresses](/documentation/restricting-connection-origins-and-ip-addresses)
