import { g as createCollectionToGlobResultMap, h as createGetCollection, i as createGetEntryBySlug, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro.c3f7cf49.mjs';
import { s as slugify, f as formatDate, $ as $$MainLayout } from './pages/all.d23ca6c5.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blogs/blog-1.md": () => import('./blog-1.da2eaf97.mjs'),"/src/content/blogs/blog-10.md": () => import('./blog-10.a572e71e.mjs'),"/src/content/blogs/blog-11.md": () => import('./blog-11.dc054813.mjs'),"/src/content/blogs/blog-2.md": () => import('./blog-2.b0ff6797.mjs'),"/src/content/blogs/blog-3.md": () => import('./blog-3.05cdb534.mjs'),"/src/content/blogs/blog-4.md": () => import('./blog-4.a799cdca.mjs'),"/src/content/blogs/blog-5.md": () => import('./blog-5.9d38e25f.mjs'),"/src/content/blogs/blog-6.md": () => import('./blog-6.022cf115.mjs'),"/src/content/blogs/blog-7.md": () => import('./blog-7.844b12ee.mjs'),"/src/content/blogs/blog-8.md": () => import('./blog-8.375f97e0.mjs'),"/src/content/blogs/blog-9.md": () => import('./blog-9.cfe0cc14.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blogs/blog-1.md": () => import('./blog-1.24de41dd.mjs'),"/src/content/blogs/blog-10.md": () => import('./blog-10.8a99ddd4.mjs'),"/src/content/blogs/blog-11.md": () => import('./blog-11.b9042d61.mjs'),"/src/content/blogs/blog-2.md": () => import('./blog-2.75186fc9.mjs'),"/src/content/blogs/blog-3.md": () => import('./blog-3.46174008.mjs'),"/src/content/blogs/blog-4.md": () => import('./blog-4.0e5bf442.mjs'),"/src/content/blogs/blog-5.md": () => import('./blog-5.3a9f4c76.mjs'),"/src/content/blogs/blog-6.md": () => import('./blog-6.27c988a2.mjs'),"/src/content/blogs/blog-7.md": () => import('./blog-7.2ef795e0.mjs'),"/src/content/blogs/blog-8.md": () => import('./blog-8.891ff815.mjs'),"/src/content/blogs/blog-9.md": () => import('./blog-9.a8320599.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const getEntryBySlug = createGetEntryBySlug({
	getCollection,
	collectionToRenderEntryMap,
});

const $$Astro$1 = createAstro("https://chaosandvideogames.com");
const prerender$1 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const allBlogs = await getCollection("blogs");
  const recentBlogs = [...allBlogs].sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  ).slice(0, 3);
  await getEntryBySlug("blogs", "blog-2");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Index Page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="flex column homeContainer ">
				
				<!--  -->
		<!-- <section class="favoritePost absolute flex">
			<div >
				<img src="./img/favPost1.png"  class="" width="">
			</div>

		</section> -->




			<!-- recent post -->
		
				

				<ul class="recentPostCard  flex column ">
					<div class="w-full flex column recentPostContainer">
							<div class="w-full row flex recentPostShader">
								<h2 class="flex column font-avengers pl-8 m-top-8 ff-size-40">Recent <span class="no-wrap pl-8 overflow-hidden m-top-32 absolute font-stigo ff-size-8 ">Blog Post</span></h2>
							</div>
							
					</div>


					${recentBlogs.map((v) => renderTemplate`<li>
						<a${addAttribute(`/blogs/${slugify(v.slug)}/`, "href")}>
							<div class="postCardContainer flex">
								<div class="postCardInfo">	
									<span></span>
									<h3>${v.data.title}</h3>
									<p class="subtitle">${v.data.subtitle}</p>
									<p>${formatDate(v.data.publishDate)}</p>
								</div>
						
							<div class="postCardImage">
								<img${addAttribute(v.data.image.src, "src")}>
							</div>
							

						</div>
						</a>
					</li>`)}
				</ul>
				
				
				</div>` })}`;
}, "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/pages/index.astro");

const $$file$1 = "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/pages/index.astro";
const $$url$1 = "";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://chaosandvideogames.com");
const prerender = true;
async function getStaticPaths() {
  const getBlogs = await getCollection("blogs");
  return getBlogs.map((post) => ({
    params: { slug: slugify(post.slug) },
    props: post
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { render } = Astro2.props;
  const { Content } = await render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/pages/blogs/[slug].astro");

const $$file = "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/pages/blogs/[slug].astro";
const $$url = "/blogs/[slug]/";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page1 as _, _page4 as a };
