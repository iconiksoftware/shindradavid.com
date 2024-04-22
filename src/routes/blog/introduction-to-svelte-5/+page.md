---
title: Introduction to svelte 5
description: An introduction to svelte 5
thumbnailUrl: /assets/posts/introduction-to-svelte-5/thumbnail.png
publishedOn: 2024-04-22
tags:
  - svelte
---

# Introduction to svelte 5

```svelte
<script>
	let count = 0;
</script>

<main>
	<button on:click={() => count++}>Count is {count}</button>
</main>

<style>
	button {
		color: red;
	}
</style>
```
