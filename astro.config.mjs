import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://chaosandvideogames.com',
  output: 'server',
  adapter: netlify(),
  debug: true,
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  // base: 'Chaosandvideogames',
  build: {
    format: 'directory',
    // assetsPrefix: 'https://Chaosandvideogames.com',
    assets: 'assets' //Puts all CSS and JS files  in here - Ex ./dist/client/valueGiven
    // client: './Chaosandvideogames' ,   //Makes dist folder based on the value given
    //  server:'./server'
  },

  trailingSlash: "always"
});