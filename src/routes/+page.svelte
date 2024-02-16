<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const posts = data.posts;
</script>

<main>
	<h1>Home</h1>

	<section>
		<h2>Blog</h2>

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
