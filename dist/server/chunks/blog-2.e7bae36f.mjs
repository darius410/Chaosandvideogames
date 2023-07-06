import { l as createVNode, F as Fragment } from './astro.c3f7cf49.mjs';
import { $ as $$BlogLayout } from './BlogLayout.5b9ac4b4.mjs';
import 'path-to-regexp';
import 'fs';
import 'tls';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'slash';
import 'html-escaper';
import './pages/all.e7bef4ee.mjs';
import 'sharp';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
/* empty css                           *//* empty css                       *//* empty css                        *//* empty css                       *//* empty css                          */import 'svgo';

const html = "<p>Veniam laboris deserunt culpa consequat tempor id exercitation fugiat velit. Cupidatat eiusmod sit ut nostrud mollit deserunt nulla elit consequat. Qui ex occaecat non minim nulla fugiat fugiat.Do ea nostrud voluptate irure tempor adipisicing pariatur pariatur culpa ad ipsum. Incididunt et minim et amet proident. Aliqua eu esse veniam sint consectetur nulla veniam esse aliquip do. Irure et id reprehenderit nisi ex aliqua officia cupidatat nulla ex adipisicing aute ut.</p>";

				const frontmatter = {"layout":"../../layouts/BlogLayout.astro","title":"The downsides of Youtube studying","subtitle":"Youtube can be a great source for learning how to code for free,but what if it also the worst way to learn?","publishDate":"2023-02-27","tags":["Coding"],"image":{"src":"/img/chinese tower2.jpg","alt":"Alternate Text"},"author":"Darius D Hansley"};
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
