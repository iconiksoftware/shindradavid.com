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

	<section>
		<h2>Blog</h2>

		<div>
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
</main>
