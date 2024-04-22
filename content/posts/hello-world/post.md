---
title: Post One
date: '2021-12-14'
tags:
  - svelte
  - ts
---

# This is the first level heading

This is the content below the first heading

## This is the second level heading

This is the content below the second level heading

```ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { parseMarkdown } from '$lib/server/utils/markdown';
import { read } from '$app/server';

export const load = (async ({ params }) => {
	try {
		const slug = params.slug;
		const asset = read(`/content/posts/${slug}/post.md`);
		const file = await asset.text();
		const { content, frontmatter } = await parseMarkdown(file);

		return { frontmatter, content };
	} catch (err) {
		console.error(err);
		error(500, 'Internal server error');
	}
}) satisfies PageServerLoad;
```
