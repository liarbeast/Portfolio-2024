<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({}), mdx()],
	site: 'https://liarbeast.github.io'
})
=======
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({})]
});
>>>>>>> parent of 9f1e9b4 (Before add cloudflare)
=======
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({})]
});
>>>>>>> parent of 9f1e9b4 (Before add cloudflare)
