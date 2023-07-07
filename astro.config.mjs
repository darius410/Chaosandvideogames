import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: 'https://chaosandvideogames.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), node({
    mode: 'standalone'
  }), sitemap()],
  
  output: "server",

  debug: true,

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