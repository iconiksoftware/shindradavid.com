<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { content, frontmatter } = data;
</script>

<main>
	{@html content}
</main>
