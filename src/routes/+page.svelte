<script lang="ts">
	import type { PageData } from './$types';

	import { PostCard } from '$lib/components';

	export let data: PageData;

	const posts = data.posts;
</script>

<main>
	<h1>Home</h1>

	<section>
		<h2>Blog</h2>

		<div>
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
</main>
