<script lang="ts">
	import MyWorkCard from '$lib/components/MyWorkCard.svelte';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { projects } = data;

	let activeCategory = $state<'all' | 'software' | 'design'>('all');

	let filteredProjects = $derived(
		projects.filter((project) => {
			if (activeCategory === 'all') {
				return true;
			}
			return project.category === activeCategory;
		})
	);
</script>

<main class="main work-page">
	<section class="page-header hero-section">
		<h1>My Work</h1>
		<p>
			Explore a selection of my software development projects and design creations. Each project
			reflects my commitment to robust solutions and compelling aesthetics.
		</p>
	</section>

	<section class="filter-section">
		<button
			class="button {activeCategory === 'all' ? 'primary' : 'secondary'}"
			onclick={() => (activeCategory = 'all')}
		>
			All
		</button>
		<button
			class="button {activeCategory === 'software' ? 'primary' : 'secondary'}"
			onclick={() => (activeCategory = 'software')}
		>
			Software Development
		</button>
		<button
			class="button {activeCategory === 'design' ? 'primary' : 'secondary'}"
			onclick={() => (activeCategory = 'design')}
		>
			Design
		</button>
	</section>

	<section class="projects-grid-section">
		{#each filteredProjects as project (project.slug)}
			<MyWorkCard {project} />
		{/each}

		{#if filteredProjects.length === 0}
			<p class="no-projects-message">
				No projects found for this category. Please select another filter or check back later!
			</p>
		{/if}
	</section>
</main>

<style lang="scss">
	@use 'sass:color';
	@use '../../styles/utils';

	// Base styling for the entire work page
	.work-page {
		min-height: 100vh; // Ensure page takes at least full viewport height
		background-color: var(--clr-bg-primary); // Use primary background color
		color: var(--clr-txt-primary-on-bg-primary); // Use primary text color
	}

	// Hero section styling
	.hero-section {
		padding-top: var(--spacing-2xl); // Top padding
		padding-bottom: var(--spacing-2xl); // Bottom padding
		text-align: center; // Center align text

		h1 {
			font-size: var(--fs-xl); // Large heading font size
			margin-bottom: var(--spacing-md); // Space below heading
			color: var(--clr-txt-primary-on-bg-primary); // Primary text color for heading
		}

		p {
			font-size: var(--fs-base); // Medium font size for paragraph
			max-width: 700px; // Limit paragraph width for readability
			margin: 0 auto; // Center paragraph horizontally
			color: var(--clr-txt-secondary-on-bg-primary); // Secondary text color for paragraph
		}
	}

	// Filter section styling
	.filter-section {
		display: flex; // Use flexbox for button layout
		justify-content: center; // Center buttons horizontally
		gap: var(--spacing-sm); // Space between buttons
		margin-bottom: var(--spacing-2xl); // Space below filter section
		flex-wrap: wrap; // Allow buttons to wrap on smaller screens

		.button {
			padding: var(--spacing-sm) var(--spacing-md);
			font-size: var(--fs-sm);
			font-weight: var(--fw-bold);
			border-radius: var(--radius-base);
			transition: background-color var(--animation-speed-fast) var(--animation-fn-ease-in-out);

			&.primary {
				background-color: var(--clr-btn-bg-primary);
				color: var(--clr-txt-primary-on-btn-bg-primary);
			}

			&.secondary {
				background-color: var(--clr-bg-secondary);
				color: var(--clr-txt-primary-on-bg-secondary);
			}
		}
	}

	.projects-grid-section {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-xl);
		padding-bottom: var(--spacing-9xl);

		@include utils.respond-to('md-screens') {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			gap: var(--spacing-md);
		}

		@include utils.respond-to('lg-screens') {
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: var(--spacing-md);
		}

		.no-projects-message {
			grid-column: 1 / -1;
			text-align: center;
			font-size: var(--fs-md);
			color: var(--clr-txt-secondary-on-bg-primary);
			padding: var(--spacing-6xl) 0;
		}
	}

	// Individual project card styling
	.project-card {
		background-color: var(--clr-bg-secondary); // Secondary background for cards
		border-radius: var(--radius-sm); // Rounded corners for cards
		overflow: hidden; // Hide content that overflows rounded corners
		box-shadow: var(--shadow-md); // Apply medium shadow
		display: flex; // Use flexbox for internal layout (image on top, content below)
		flex-direction: column; // Stack items vertically
		transition:
			transform var(--animation-speed-normal) var(--animation-fn-ease-out),
			box-shadow var(--animation-speed-normal) var(--animation-fn-ease-out); // Smooth transitions for hover effects

		&:hover {
			transform: translateY(-5px); // Lift card slightly on hover
			box-shadow: var(--shadow-lg); // Increase shadow on hover
		}

		.project-image {
			width: 100%; // Image takes full width of card
			height: 200px; // Fixed height for consistent card appearance
			object-fit: cover; // Cover the area, cropping if necessary
			display: block; // Ensure image behaves as a block element
			border-bottom: 1px solid var(--clr-divider-primary-on-bg-secondary); // Subtle divider below image
		}

		.project-content {
			padding: var(--spacing-lg); // Padding inside the content area
			display: flex; // Use flexbox for content layout
			flex-direction: column; // Stack content vertically
			flex-grow: 1; // Allow content to grow and fill available space

			h3 {
				font-size: var(--fs-lg); // Large font size for project title
				color: var(--clr-txt-primary-on-bg-secondary); // Primary text color for title
				margin-top: 0; // Remove default top margin
				margin-bottom: var(--spacing-sm); // Space below title
			}

			p {
				font-size: var(--fs-sm); // Small font size for description
				color: var(--clr-txt-secondary-on-bg-secondary); // Secondary text color for description
				margin-bottom: var(--spacing-md); // Space below description
				flex-grow: 1; // Allow description to take up remaining space, pushing button down
			}

			.project-meta {
				display: flex; // Flexbox for tags
				flex-wrap: wrap; // Allow tags to wrap
				gap: var(--spacing-xs); // Space between tags
				margin-top: var(--spacing-sm); // Top margin
				margin-bottom: var(--spacing-md); // Bottom margin

				.category-tag,
				.tech-tag {
					font-size: var(--fs-xs); // Extra small font size for tags
					padding: var(--spacing-xs) var(--spacing-sm); // Padding for tags
					border-radius: var(--radius-xs);
					white-space: nowrap;
				}

				.category-tag {
					background-color: var(--clr-accent); // Use accent color for category tag
					color: var(--clr-txt-primary-on-bg-accent); // Text color on accent background
				}

				.tech-tag {
					background-color: var(--clr-bg-tertiary); // Tertiary background for tech tags
					color: var(--clr-txt-tertiary-on-bg-secondary); // Tertiary text color
				}
			}

			.view-project-btn {
				align-self: flex-start; // Align button to the start (left)
				margin-top: auto; // Push button to the bottom of the card content
			}
		}
	}
</style>
