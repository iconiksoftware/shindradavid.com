<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts } = data;
</script>

<main>
	<h1>Blog</h1>

	<section>
		<div>
			{#each posts as post}
				<a href="/blog/{post.slug}">
					<article>
						<h3>{post.title}</h3>
					</article>
				</a>
			{/each}
		</div>
	</section>
</main>
