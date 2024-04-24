<script lang="ts">
	import type { PageData } from './$types';

	import { PostCard } from '$lib/components';

	import { theme } from '$lib/stores';
	import type { Theme } from '$lib/types';

	export let data: PageData;

	const posts = data.posts;

	function setTheme(newTheme: Theme) {
		console.log('changing theme');
		document.body.setAttribute('data-theme', newTheme);
	}
</script>

<main>
	<h1>Home</h1>

	<button on:click={() => setTheme('dark')}>Change theme</button>

	<section>
		<h2>Blog</h2>

		<div>
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
</main>
