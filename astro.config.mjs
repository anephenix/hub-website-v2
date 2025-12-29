// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
						{ label: 'Install', slug: 'documentation/install' },
						{ label: 'Starting a server', slug: 'documentation/starting-a-server' },
						{ label: 'Loading a client in the browser', slug: 'documentation/loading-a-client-in-the-browser' },
						{ label: 'Loading a client in Node.js', slug: 'documentation/loading-a-client-in-node-js' },
						{ label: 'RPC - Creating an action on the server', slug: 'documentation/creating-an-action-on-the-server' },
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
});
