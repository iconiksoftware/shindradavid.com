<script lang="ts">
	import type { PageData } from './$types';

	import { PostCard } from '$lib/components';

	import { setTheme } from '$lib/utils';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { posts } = data;
</script>

<main>
	<h1>Home</h1>

	<button onclick={() => setTheme('dark')}>Dark</button>
	<button onclick={() => setTheme('light')}>Light</button>
	<button onclick={() => setTheme('system')}>System</button>

	<section class="posts">
		<header class="posts__header">
			<h2 class="title">Blog</h2>
			<p class="subtitle">
				I write about software engineering, leadership, and productivity. I also share my thoughts
				on the tech industry and how to navigate it.
			</p>
		</header>

		<div class="posts__container">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>

		<a href="/blog">View all</a>
	</section>
</main>

<style lang="scss">
	.posts {
		&__container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: var(--spacing-lg);
		}
	}
</style>
