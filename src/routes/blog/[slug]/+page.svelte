<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { html, frontmatter } = data;
</script>

<main>
	<h1>{frontmatter.title}</h1>

	<figure class="thumbnail">
		<img src={frontmatter.thumbnailUrl} alt={frontmatter.title} />
	</figure>

	<section class="content">
		{@html html}
	</section>
</main>

<style lang="scss">
	@use '../../../styles/utils';
	main {
		@include utils.respond-to('md-screens') {
			width: 50vw;
			margin: 0 auto;
		}

		h1 {
			text-align: center;
			margin-top: var(--spacing-lg);
			margin-bottom: var(--spacing-md);
			margin-left: auto;
			margin-right: auto;

			@include utils.respond-to('md-screens') {
				width: 40vw;
			}
		}

		.thumbnail {
			height: 100%;
		}

		.content {
			margin-top: var(--spacing-lg);
		}
	}
</style>
