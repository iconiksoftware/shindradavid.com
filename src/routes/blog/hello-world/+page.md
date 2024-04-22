---
title: Hello World
description: This is my first blog post
thumbnailUrl: /assets/posts/hello-world/thumbnail.png
publishedOn: 2024-04-21
tags:
  - html
  - sveltekit
---

## Learn Javascript

```javascript
import { data } from '$app/stores';

console.log(data);
```

## Learn Svelte

```svelte
<script type="ts">
	let count = 0;
</script>

<button on:click={() => count++}>Count is {count}</button>
```

## Learn Typescript

```typescript
import type { PageLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageLoad;
```

### Variables
