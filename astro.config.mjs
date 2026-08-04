// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [
		starlight({
			title: 'Hub',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/anephenix/hub' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Get started', slug: 'guides/get-started' },
					],
				},
				{
					label: 'Documentation',
					items: [
						{ label: 'Introduction', slug: 'documentation' },
						{
							label: 'Getting started',
							items: [
								{ label: 'Install', slug: 'documentation/install' },
								{ label: 'Starting a server', slug: 'documentation/starting-a-server' },
								{ label: 'Loading a client in the browser', slug: 'documentation/loading-a-client-in-the-browser' },
								{ label: 'Loading a client in Node.js', slug: 'documentation/loading-a-client-in-node-js' },
							],
						},
						{
							label: 'RPC',
							items: [
								{ label: 'Creating an action on the server', slug: 'documentation/creating-an-action-on-the-server' },
								{ label: 'Calling an action from the client', slug: 'documentation/calling-an-action-from-the-client' },
								{ label: 'Creating an action on the client', slug: 'documentation/creating-an-action-on-the-client' },
								{ label: 'Calling an action from the server', slug: 'documentation/calling-an-action-from-the-server' },
								{ label: 'Calling an action without a response', slug: 'documentation/calling-an-action-without-a-response' },
							],
						},
						{
							label: 'PubSub',
							items: [
								{ label: 'Subscribing to a channel', slug: 'documentation/subscribing-to-a-channel' },
								{ label: 'Unsubscribing from a channel', slug: 'documentation/unsubscribing-from-a-channel' },
								{ label: 'Publishing a message from the client', slug: 'documentation/publishing-a-message-from-the-client' },
								{ label: 'Publishing a message from the server', slug: 'documentation/publishing-a-message-from-the-server' },
								{ label: 'Handling messages for a channel', slug: 'documentation/handling-messages-for-a-channel' },
								{ label: 'Removing message handlers', slug: 'documentation/removing-message-handlers' },
							],
						},
						{
							label: 'Advanced PubSub',
							items: [
								{ label: 'Handling client disconnects/reconnects', slug: 'documentation/handling-client-disconnects-and-reconnects' },
								{ label: 'Client/channel subscription data stores', slug: 'documentation/client-channel-subscription-data-stores' },
								{ label: 'Authenticated channels', slug: 'documentation/authenticated-channels' },
								{ label: 'Wildcard channel configurations', slug: 'documentation/wildcard-channel-configurations' },
								{ label: 'Enabling/disabling client publish', slug: 'documentation/enabling-disabling-client-publish' },
							],
						},
						{
							label: 'Security',
							items: [
								{ label: 'Using a secure server', slug: 'documentation/using-a-secure-server' },
								{ label: 'Restricting connection origins/IPs', slug: 'documentation/restricting-connection-origins-and-ip-addresses' },
								{ label: 'Kicking clients', slug: 'documentation/kicking-clients' },
								{ label: 'Banning clients', slug: 'documentation/banning-clients' },
								{ label: 'Managing ban rules', slug: 'documentation/managing-ban-rules' },
							],
						},
					]
				},
				{
					label: 'Other items',
					autogenerate: { directory: 'other-items' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
	      ],
		}),
	],

    adapter: cloudflare()
});