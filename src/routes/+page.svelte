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
						<img src={post.thumbnailUrl} alt={post.title} />
						<h3>{post.title}</h3>
						<p>{post.description}</p>

						<ul>
							{#each post.tags as tag}
								<li>{tag}</li>
							{/each}
						</ul>
					</article>
				</a>
			{/each}
		</div>
	</section>
</main>
