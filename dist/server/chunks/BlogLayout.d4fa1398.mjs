import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderSlot } from './astro.c3f7cf49.mjs';
import { e as $$Image, $ as $$MainLayout } from './pages/all.c744ee08.mjs';

const $$Astro$1 = createAstro("https://chaosandvideogames.com");
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  const { title, publishDate, tags, author, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="blogHeader container">
    <div class="blogInfo blogContainer ">
        <small>
            <p class="sideways nameDate"> ${author} - ${publishDate}</p>
        </small>  

    </div>
     <h2 class="blogTitle sideways ">${title}</h2>


    ${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt, "width": "300", "height": "400", "aspectRatio": "4:2", "format": "jpeg", "fit": "contain", "quality": 80, "class": "blogImage" })}  

<div class="socialContainer" aria-label="Social Icons Navigation">
<ul class="socialMediaIcons">
<li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9.653 20.865a.501.501 0 0 0-.59-.492c-1.59.295-3.608.299-4.194-1.347a5.622 5.622 0 0 0-1.679-2.249a1.46 1.46 0 0 1-.408-.31a.5.5 0 0 0-.491-.42h-.002a.5.5 0 0 0-.5.499c-.003.57.71.997.922 1.11c.53.475.947 1.064 1.222 1.721c.348.98 1.41 2.495 4.722 2.072c.003.365.008.553.012.697l.005.294a.5.5 0 0 0 1 0l-.005-.322a38.783 38.783 0 0 1-.014-1.253zM20.921 5.224a7.357 7.357 0 0 0-.096-.119c.067-.21.12-.427.158-.645a6.033 6.033 0 0 0-.397-3.17a.5.5 0 0 0-.309-.29c-.141-.047-1.433-.395-4.13 1.382a13.973 13.973 0 0 0-6.884 0C6.567.626 5.283.955 5.14.997a.503.503 0 0 0-.316.292a6.038 6.038 0 0 0-.394 3.219c.038.2.087.397.145.592a3.584 3.584 0 0 0-.1.128A5.946 5.946 0 0 0 3.2 9.002c-.002.31.012.62.043.929c.34 4.664 3.349 5.962 5.947 6.405a3.807 3.807 0 0 0-.376.967a.5.5 0 0 0 .971.238c.093-.46.325-.88.665-1.202a.5.5 0 0 0-.272-.874C7.422 15.152 4.56 14.24 4.24 9.84a7.683 7.683 0 0 1-.039-.838a4.982 4.982 0 0 1 1.07-3.168c.076-.102.16-.194.243-.286a.501.501 0 0 0 .096-.516a4.05 4.05 0 0 1-.194-.695a4.955 4.955 0 0 1 .232-2.39a6.71 6.71 0 0 1 3.248 1.39a.497.497 0 0 0 .414.067a12.973 12.973 0 0 1 6.793 0a.5.5 0 0 0 .415-.067a6.555 6.555 0 0 1 3.242-1.398a4.94 4.94 0 0 1 .237 2.356a3.877 3.877 0 0 1-.206.737a.501.501 0 0 0 .097.516c.088.097.175.205.253.302a4.913 4.913 0 0 1 1.07 3.152c.002.286-.012.572-.042.856c-.317 4.381-3.19 5.292-5.957 5.607a.5.5 0 0 0-.273.874c.345.325.576.752.659 1.219c.085.329.125.668.118 1.008v2.46c-.01.675-.01 1.182-.01 1.414a.5.5 0 0 0 1 0c0-.23 0-.731.01-1.407v-2.467a4.633 4.633 0 0 0-.15-1.255a3.653 3.653 0 0 0-.367-.975c2.609-.442 5.63-1.74 5.966-6.385c.033-.315.049-.632.046-.949a5.892 5.892 0 0 0-1.29-3.778z"></path>
    </svg>
</li>
   
<li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5zM7 21H4V10h3v11zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5zm4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14v7zM5.868 2.002A2.73 2.73 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455zM5.833 6.46a1.75 1.75 0 0 1-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46z"></path></svg>
</li>

<li>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14.792 10.775l-3.668-2.112A1.417 1.417 0 0 0 9 9.89v4.222c-.003.506.267.974.706 1.224a1.41 1.41 0 0 0 1.419.002l3.667-2.112a1.413 1.413 0 0 0 0-2.45zm-.5 1.582l-3.666 2.113a.414.414 0 0 1-.419 0a.408.408 0 0 1-.207-.36V9.89a.408.408 0 0 1 .207-.359a.402.402 0 0 1 .418 0l3.667 2.113a.41.41 0 0 1 0 .714zM19 4H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V7a3.003 3.003 0 0 0-3-3zm2 13a2.003 2.003 0 0 1-2 2H5a2.003 2.003 0 0 1-2-2V7a2.003 2.003 0 0 1 2-2h14a2.003 2.003 0 0 1 2 2v10z"></path></svg>
</li>

<li>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.945 2.765a1.552 1.552 0 0 0-1.572-.244L2.456 9.754a1.543 1.543 0 0 0 .078 2.884L6.4 13.98l2.095 6.926c.004.014.017.023.023.036a.486.486 0 0 0 .093.15a.49.49 0 0 0 .226.143c.01.004.017.013.027.015h.006l.003.001a.448.448 0 0 0 .233-.012c.008-.002.016-.002.025-.005a.495.495 0 0 0 .191-.122c.006-.007.016-.008.022-.014l3.013-3.326l4.397 3.405c.267.209.596.322.935.322c.734 0 1.367-.514 1.518-1.231L22.469 4.25a1.533 1.533 0 0 0-.524-1.486zM9.588 15.295l-.707 3.437l-1.475-4.878l7.315-3.81l-4.997 4.998a.498.498 0 0 0-.136.253zm8.639 4.772a.54.54 0 0 1-.347.399a.525.525 0 0 1-.514-.078l-4.763-3.689a.5.5 0 0 0-.676.06L9.83 19.07l.706-3.427l7.189-7.19a.5.5 0 0 0-.584-.797L6.778 13.054l-3.917-1.362A.526.526 0 0 1 2.5 11.2a.532.532 0 0 1 .334-.518l17.914-7.233a.536.536 0 0 1 .558.086a.523.523 0 0 1 .182.518l-3.261 16.015z"></path></svg>
</li>

<li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.99 1.596a27.982 27.982 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496zm-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103v2.493z"></path></svg>
</li>

</ul>

</div>

</header>`;
}, "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/layouts/components/BlogHeader.astro");

const $$Astro = createAstro("https://chaosandvideogames.com");
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { frontmatter } = Astro2.props;
  const { title, publishDate, tags, author, image } = frontmatter;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "publishDate": publishDate, "tags": tags }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "author": author, "title": title, "publishDate": publishDate, "tags": tags, "image": image })}${maybeRenderHead($$result2)}<div class="post-content container">
            
        ${renderSlot($$result2, $$slots["default"])}

        
    </div>` })}`;
}, "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/layouts/BlogLayout.astro");

export { $$BlogLayout as $ };