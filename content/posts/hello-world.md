---
title: Hello World
description: This is my first blog post
thumbnailUrl: /images/posts/hello-world/thumbnail.png
publishedOn: 2024-04-21
tags:
  - html
  - sveltekit
  - typescript
  - angular
---

## Learn Javascript

{% icon "javascript" file "src/lib/main.js" %}

```javascript
import { data } from '$app/stores';

console.log(data);
```

## Learn Svelte

{% icon "terminal" file "terminal" %}

```shell
pnpm create svelte@latest helloworld
```

{% icon "svelte" file "+page.svelte" %}

```svelte
<script type="ts">
	let count = 0;
</script>

<button on:click={() => count++}>Count is {count}</button>
```

## Learn Typescript

{% icon "typescript"  file "main.ts" %}

```typescript
import type { PageLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageLoad;
```

### Variables
