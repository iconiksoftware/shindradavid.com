<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { content, metadata } = data;
</script>

<main>
	<h1>Blog</h1>

	{@html content}
</main>
