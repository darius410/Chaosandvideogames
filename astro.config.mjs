import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://chaosandvideogames.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), node({
    mode: 'standalone'
  }), sitemap()],
    // outDir:'./Chaosandvideogamesout',
  trailingSlash: 'never',
  output: "server",
  debug: true,
  publicDir: './blogs/'
    build:{
      format: 'directory',
     
      
     assets:'Chaosandvideogames/assets',     //Puts all CSS and JS files  in here - Ex ./dist/valueGiven
     client: './Chaosandvideogames' ,   //Makes dist folder based on the value given
    //  server:'./server'
  },

});