<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { html, frontmatter } = data;
</script>

<main class="page">
	<figure class="thumbnail">
		<img src={frontmatter.thumbnailUrl} alt={frontmatter.title} />
	</figure>

	<h1>{frontmatter.title}</h1>

	<section class="content">
		{@html html}
	</section>
</main>

<style lang="scss">
	@use '../../../styles/utils';
	.page {
		@include utils.respond-to('md-screens') {
			width: 50vw;
			margin: 0 auto;
		}

		.thumbnail {
			height: 100%;
		}

		.content {
		}
	}
</style>
