<script lang="ts">
	import MyWorkCard from '$lib/components/MyWorkCard.svelte';
	import type { Project } from '$lib/types';

	const projects: Project[] = [
		{
			id: 1,
			title: 'NGO Master: An NGO Management System',
			description:
				'Spearheaded the migration of a critical business management system from Firebase to a self-hosted VPS, significantly reducing operational costs and enhancing flexibility.',
			category: 'software',
			technologies: ['PostgreSQL', 'Express.js', 'React', 'React Native'],
			image: '/images/my-work/ngo-master-thumbnail.png',
			link: '#' // Replace with actual project link
		},
		{
			id: 2,
			title: 'Prisha Charity Foundation Management System',
			description:
				'Crafted a comprehensive brand identity for a local startup, including logo, color palette, typography, and marketing collateral.',
			category: 'design',
			technologies: ['PostgreSQL', 'Express.js', 'React', 'React Native'],
			image: '/images/my-work/prisha-charity-foundation-thumbnail.png',
			link: '#' // Replace with actual project link
		},
		{
			id: 3,
			title: 'Prisha Charity Foundation Website',
			description:
				'Developed and maintained customer-facing e-commerce platforms using React and React Native, crucial for online sales and customer engagement.',
			category: 'software',
			technologies: ['React', 'SCSS'],
			image: '/images/my-work/prisha-charity-foundation-website.png',
			link: '#' // Replace with actual project link
		},
		{
			id: 4,
			title: 'Prisha Charity Foundation ID Card Design',
			description:
				'Designed various promotional materials for events and marketing campaigns, ensuring brand consistency and visual appeal.',
			category: 'design',
			technologies: ['Figma'],
			image: '/images/my-work/prisha-charity-foundation-id-cards.png',
			link: '#' // Replace with actual project link
		},
		{
			id: 5,
			title: 'Maurice Cakes & Events social media designs',
			description:
				'Led the complete UI/UX redesign of an existing mobile application, focusing on improving user flow, accessibility, and visual aesthetics.',
			category: 'design',
			technologies: ['Figma'],
			image: '/images/my-work/maurice-cakes-social-media-designs-thumbnail.png',
			link: '#' // Replace with actual project link
		},
		{
			id: 6,
			title: 'Wild Palace Safari Lodge social media designs',
			description:
				'Designed and developed a personal portfolio website from scratch, showcasing projects and skills using modern web technologies.',
			category: 'design',
			technologies: ['Figma'],
			image: '/images/my-work/wild-palace-safari-lodge-social-media-designs-thumbnail.png',
			link: '#' // Replace with actual project link
		}
	];

	// Reactive state to manage the active filter category
	let activeCategory: 'all' | 'software' | 'design' = 'all';

	// Reactive declaration to filter projects based on the active category
	$: filteredProjects = projects.filter((project) => {
		if (activeCategory === 'all') {
			return true; // Show all projects if 'all' is selected
		}
		return project.category === activeCategory; // Otherwise, show projects matching the selected category
	});
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
			on:click={() => (activeCategory = 'all')}
		>
			All
		</button>
		<button
			class="button {activeCategory === 'software' ? 'primary' : 'secondary'}"
			on:click={() => (activeCategory = 'software')}
		>
			Software Development
		</button>
		<button
			class="button {activeCategory === 'design' ? 'primary' : 'secondary'}"
			on:click={() => (activeCategory = 'design')}
		>
			Design
		</button>
	</section>

	<section class="projects-grid-section">
		{#each filteredProjects as project (project.id)}
			<MyWorkCard {project} />
		{/each}

		<!-- Message for no projects in a filtered category -->
		{#if filteredProjects.length === 0}
			<p class="no-projects-message">
				No projects found for this category. Please select another filter or check back later!
			</p>
		{/if}
	</section>
</main>

<style lang="scss">
	// Import your SASS partials. Adjust paths if necessary based on your project structure.
	// Example: If your styles are in `src/lib/styles/`, then paths might be `../../lib/styles/breakpoints`.
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
			padding: var(--spacing-sm) var(--spacing-md); // Padding for buttons
			font-size: var(--fs-sm); // Small font size for button text
			border-radius: var(--radius-base); // More rounded corners for a "tab" look
			transition: background-color var(--animation-speed-fast) var(--animation-fn-ease-in-out); // Smooth transition for background

			&.primary {
				background-color: var(--clr-btn-bg-primary); // Primary button background
				color: var(--clr-txt-primary-on-btn-bg-primary); // Primary text color on button
			}

			&.secondary {
				background-color: var(--clr-bg-secondary); // Secondary button background
				color: var(--clr-txt-primary-on-bg-secondary); // Primary text color on secondary button
			}
		}
	}

	// Projects grid section styling
	.projects-grid-section {
		display: grid; // Use CSS Grid for project cards
		grid-template-columns: 1fr; // Default to single column on small screens
		gap: var(--spacing-xl); // Gap between grid items
		padding-bottom: var(--spacing-9xl); // Bottom padding for the section

		@include utils.respond-to('md-screens') {
			// On medium screens and up, use auto-fit for flexible columns
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			gap: var(--spacing-md); // Increase gap
		}

		@include utils.respond-to('lg-screens') {
			// On large screens and up, adjust minmax for potentially wider cards
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: var(--spacing-md); // Further increase gap
		}

		.no-projects-message {
			grid-column: 1 / -1; // Make the message span all grid columns
			text-align: center; // Center the message
			font-size: var(--fs-md); // Medium font size
			color: var(--clr-txt-secondary-on-bg-primary); // Secondary text color
			padding: var(--spacing-6xl) 0; // Vertical padding
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
