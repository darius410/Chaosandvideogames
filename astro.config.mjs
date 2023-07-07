import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
// import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify/static';
export default defineConfig({
  site: 'https://chaosandvideogames.com',
  debug: true,
  output: "server",
  adapter: netlify(),
  experimental: {
    redirects: true,
  },
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  
  // base: 'Chaosandvideogames',
    build:{
      format: 'file',
     
      // assetsPrefix: 'https://Chaosandvideogames.com',
     assets:'assets',     //Puts all CSS and JS files  in here - Ex ./dist/client/valueGiven
    // client: './Chaosandvideogames' ,   //Makes dist folder based on the value given
    //  server:'./server'
  },
  trailingSlash: "always",
 

});