<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { content, frontmatter } = data;
</script>

<main>
	<h1>{frontmatter.title}</h1>

	<section>
		{@html content}
	</section>
</main>
