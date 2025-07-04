<script lang="ts">
	import type { PageData } from './$types';

	import { type Experience } from '$lib/components/WorkExperience.svelte';
	import { PostCard, WorkExperience } from '$lib/components';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { posts, projects } = data;

	// Define your work experience data here
	const myExperiences: Experience[] = [
		{
			id: 1,
			date: 'May 18, 2023 – Present',
			title: 'Head IT & Software Developer',
			company: 'Maurice Cakes & Events',
			description:
				'Led all technology initiatives, focusing on internal operations and customer-facing platforms. Spearheaded the migration from Firebase to a self-hosted VPS, significantly reducing operational costs and enhancing system flexibility.',
			responsibilities: [
				'Designed and implemented a new internal system (PostgreSQL, Express.js, React) for orders, finance, and events.',
				'Developed and maintained customer-facing e-commerce website and mobile app (React, React Native).',
				'Managed IT infrastructure and ensured system stability and security.',
				'Optimized IT expenditure by migrating from usage-based cloud services to a cost-effective VPS solution.'
			],
			achievements: [
				'Reduced IT expenditure by a significant margin (e.g., 80%) through strategic platform migration.',
				'Enhanced system flexibility and innovation by moving away from restrictive usage-based billing models.',
				'Successfully deployed and maintained a custom full-stack solution for critical business operations.'
			],
			technologiesUsed: [
				'React',
				'React Native',
				'Node.js',
				'Express.js',
				'PostgreSQL',
				'TypeScript',
				'Docker',
				'Nginx'
			],
			link: '#' // Link to Maurice Group's website or a detailed case study if you make one
		},
		{
			id: 2,
			date: 'Nov, 2021 – Present',
			title: 'Freelance Software Developer & Designer',
			company: 'Self-Employed',
			description:
				'Provide end-to-end software development and design services to various clients, specializing in web and mobile application development and graphic design.',
			responsibilities: [
				'Consulted with clients to gather requirements and define project scopes.',
				'Developed custom web applications (frontend and backend) and mobile apps.',
				'Designed UI/UX for digital products and created brand identities/marketing materials.',
				'Managed project timelines, client communication, and delivery of high-quality solutions.'
			],
			achievements: [
				'Successfully delivered multiple projects for diverse clients, enhancing their digital presence and operational efficiency.',
				'Built strong client relationships through effective communication and reliable project delivery.',
				'Continuously learned and adapted to new technologies and design trends to meet client needs.'
			],
			technologiesUsed: [
				'React',
				'Svelte/SvelteKit',
				'Node.js',
				'Python',
				'MongoDB',
				'PostgreSQL',
				'Figma',
				'Adobe Illustrator',
				'Photoshop'
			],
			link: '/my-work' // Link to your "My Work" page to show freelance projects
		}
	];
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

	<WorkExperience experiences={myExperiences} />
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
