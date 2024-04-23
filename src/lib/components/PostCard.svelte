<script lang="ts">
	import type { Post } from '$lib/types';

	export let post: Post;
</script>

<a href="/blog/{post.slug}">
	<article class="post">
		<img src={post.thumbnailUrl} alt={post.title} class="post__thumbnail" />
		<h3 class="post__title">{post.title}</h3>
		<p class="post__description">{post.description}</p>

		<ul class="post__tags">
			{#each post.tags as tag}
				<li class="tag tag-{tag}">{tag}</li>
			{/each}
		</ul>
	</article>
</a>

<style lang="scss">
	a {
		text-decoration: none;

		.post {
			&__tags {
				display: flex;
				align-items: center;
				gap: var(--spacing-xs);
				padding-left: 0;

				.tag {
					list-style-type: none;
				}
			}
		}
	}
</style>
