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
