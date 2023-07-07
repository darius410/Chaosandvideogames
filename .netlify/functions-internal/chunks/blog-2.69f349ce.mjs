import { l as createVNode, s as spreadAttributes, F as Fragment } from './astro.ee6a3508.mjs';
import { $ as $$BlogLayout } from './BlogLayout.e8a9bc77.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './pages/404.astro.0a03a0a8.mjs';
/* empty css                           *//* empty css                       *//* empty css                        *//* empty css                       *//* empty css                          */import 'svgo';
import './pages/blog.astro.def5b8c2.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Veniam laboris deserunt culpa consequat tempor id exercitation fugiat velit. Cupidatat eiusmod sit ut nostrud mollit deserunt nulla elit consequat. Qui ex occaecat non minim nulla fugiat fugiat.Do ea nostrud voluptate irure tempor adipisicing pariatur pariatur culpa ad ipsum. Incididunt et minim et amet proident. Aliqua eu esse veniam sint consectetur nulla veniam esse aliquip do. Irure et id reprehenderit nisi ex aliqua officia cupidatat nulla ex adipisicing aute ut.</p>");

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"The downsides of Youtube studying","subtitle":"Youtube can be a great source for learning how to code for free,but what if it also the worst way to learn?","publishDate":"2023-02-27","tags":["Coding"],"image":{"src":"../img/moon-7674557_1920.jpg","alt":"Alternate Text"},"author":"Darius D Hansley"};
				const file = "C:/Users/noobk/OneDrive/Desktop/WebProjects/Practice/Projects/astro-blog/my-blog/src/content/blogs/blog-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\nVeniam laboris deserunt culpa consequat tempor id exercitation fugiat velit. Cupidatat eiusmod sit ut nostrud mollit deserunt nulla elit consequat. Qui ex occaecat non minim nulla fugiat fugiat.Do ea nostrud voluptate irure tempor adipisicing pariatur pariatur culpa ad ipsum. Incididunt et minim et amet proident. Aliqua eu esse veniam sint consectetur nulla veniam esse aliquip do. Irure et id reprehenderit nisi ex aliqua officia cupidatat nulla ex adipisicing aute ut.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BlogLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
