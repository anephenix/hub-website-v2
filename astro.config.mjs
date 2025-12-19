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
						// { label: 'Why use Sarus?', slug: 'guides/why-use-sarus' },
					],
				},
				{
					label: 'Documentation',
					items: [
						{ label: 'Introduction', slug: 'documentation' },
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
