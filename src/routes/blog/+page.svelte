<script lang="ts">
	import type { PageData } from './$types';

	import { PostCard } from '$lib/components';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { posts } = data;
</script>

<main class="main">
	<header class="page-header">
		<h1>Blog</h1>
		<p>
			I write about software engineering, leadership, and productivity. I also share my thoughts on
			the tech industry and how to navigate it.
		</p>
	</header>

	<section class="posts">
		<div class="posts__container">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	@use '../../styles/utils';
	.main {
		@include utils.respond-to('md-screens') {
			width: 75vw;
			margin: 0 auto;
		}

		.page-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: var(--spacing-lg) 0;

			p {
				text-align: center;
			}
		}

		.posts {
			&__container {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
				gap: var(--spacing-lg);
			}
		}
	}
</style>
