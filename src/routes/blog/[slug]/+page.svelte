<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { html, frontmatter } = data;
</script>

<main>
	<figure class="thumbnail">
		<img src={frontmatter.thumbnailUrl} alt={frontmatter.title} />
	</figure>

	<h1>{frontmatter.title}</h1>

	<section class="content">
		{@html html}
	</section>
</main>

<style lang="scss">
	main {
		.thumbnail {
			height: 100%;
		}

		.content {
			width: 50vw;
			margin: 0 auto;
		}
	}
</style>
