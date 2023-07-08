import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.ee6a3508.mjs';
import { $ as $$MainLayout } from './404.astro.0a03a0a8.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                            *//* empty css                        *//* empty css                         *//* empty css                        *//* empty css                           */import 'svgo';

const $$Astro = createAstro("https://chaosandvideogames.com");
const $$Store = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Store;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "slot": "chaos", "title": "Store" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead()}<p>This is the Store Page</p>
<p>This is the Store Page</p>

<p>This is the Store Page</p>
<p>This is the Store Page</p>
<p>This is the Store Page</p>
<p>This is the Store Page</p>



` })}`;
}, "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/pages/store.astro");

const $$file = "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/pages/store.astro";
const $$url = "/store/";

export { $$Store as default, $$file as file, $$url as url };
