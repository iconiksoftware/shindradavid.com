<script lang="ts">
	import type { PageData } from './$types';

	import { PostCard } from '$lib/components';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { posts, projects } = data;
</script>

<main>
	<section class="hero">
		<h1 class="hero__heading">Hi, I’m Shindra David</h1>
		<p class="hero__subheading">
			Am a full-stack developer passionate about crafting modern, scalable web and mobile
			applications. From backend logic to frontend experiences, I love solving problems and turning
			ideas into reality.
		</p>

		<div class="hero__ctas">
			<a href="/blog" class="btn btn-primary">Read My Blog</a>
		</div>
	</section>

	<section class="posts">
		<header class="posts__header">
			<h2 class="title">Blog</h2>
			<p class="subtitle">Stay updated with my thoughts on software development and tech.</p>
		</header>

		<div class="posts__container">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>

		<a href="/blog" class="posts__cta btn btn-primary">View all</a>
	</section>
</main>

<style lang="scss">
	@use '../styles/utils';

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-lg) 0;

		@include utils.respond-to('md-screens') {
			width: 40vw;
			margin: 0 auto;
		}

		&__subheading {
			text-align: center;
		}
	}

	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__header {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: var(--spacing-sm);
			margin-bottom: var(--spacing-xl);

			p {
				text-align: center;
			}

			@include utils.respond-to('md-screens') {
				max-width: 40vw;
			}
		}
		&__container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			justify-items: center;
			gap: var(--spacing-lg);
		}

		&__cta {
			margin-top: var(--spacing-md);
			margin-bottom: var(--spacing-lg);
		}
	}
</style>
