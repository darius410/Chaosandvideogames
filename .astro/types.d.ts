declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blogs": {
"blog-1.md": {
  id: "blog-1.md",
  slug: "blog-1",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-10.md": {
  id: "blog-10.md",
  slug: "blog-10",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-2.md": {
  id: "blog-2.md",
  slug: "blog-2",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-3.md": {
  id: "blog-3.md",
  slug: "blog-3",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-4.md": {
  id: "blog-4.md",
  slug: "blog-4",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-5.md": {
  id: "blog-5.md",
  slug: "blog-5",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-6.md": {
  id: "blog-6.md",
  slug: "blog-6",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-7.md": {
  id: "blog-7.md",
  slug: "blog-7",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-8.md": {
  id: "blog-8.md",
  slug: "blog-8",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
"blog-9.md": {
  id: "blog-9.md",
  slug: "blog-9",
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
