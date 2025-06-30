<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<!-- The main container for a single project card -->
<a href="/my-work/{project.slug}" class="project-card-link">
	<article class="project-card">
		<!-- Project Image -->
		<div class="aspect-ratio-16x9">
			<img src={project.thumbnailUrl} alt={project.title} class="project-image" />
		</div>

		<div class="project-content">
			<h3 class="project-title">{project.title}</h3>

			<div class="project-meta">
				<div class="category-tag">{project.category === 'software' ? 'Software' : 'Design'}</div>
			</div>

			<span class="btn primary view-project-btn">View Work</span>
		</div>
	</article>
</a>

<style lang="scss">
	// Import your SASS partials. Adjust paths if necessary based on your project structure.
	// Assuming your utility mixins and variables are in src/styles/utils.scss
	@use '../../styles/utils';

	.project-card-link {
		text-decoration: none; // Remove underline from the link

		.project-card {
			background-color: var(--clr-bg-secondary); // Secondary background for cards
			border-radius: var(--radius-sm); // Rounded corners for cards
			overflow: hidden; // Hide content that overflows rounded corners
			box-shadow: var(--shadow-md); // Apply medium shadow
			display: flex; // Use flexbox for internal layout (image on top, content below)
			flex-direction: column; // Stack items vertically
			height: 100%; // Ensure cards in a grid have consistent height
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
				color: var(--clr-txt-primary-on-bg-secondary); // Default text color for content

				.project-title {
					font-size: var(--fs-md); // Large font size for project title
					color: var(--clr-txt-primary-on-bg-secondary); // Primary text color for title
					margin-top: 0; // Remove default top margin
					margin-bottom: var(--spacing-sm); // Space below title
				}

				.project-description {
					font-size: var(--fs-base); // Small font size for description
					color: var(--clr-txt-secondary-on-bg-secondary); // Secondary text color for description
					margin-bottom: var(--spacing-md); // Space below description
					flex-grow: 1; // Allow description to take up remaining space, pushing button down
				}

				.project-meta {
					display: flex;
					flex-direction: column;
					gap: var(--spacing-xs); // Space between tags
					margin-top: var(--spacing-sm); // Top margin
					margin-bottom: var(--spacing-md); // Bottom margin

					.category-tag,
					.tech-tag {
						width: fit-content;
						font-size: var(--fs-xs); // Extra small font size for tags
						padding: var(--spacing-xs) var(--spacing-sm); // Padding for tags
						border-radius: var(--radius-xs); // Slightly rounded corners for tags
						white-space: nowrap; // Prevent tags from breaking
					}

					.category-tag {
						background-color: var(--clr-accent); // Use accent color for category tag
						color: var(--clr-txt-primary-on-bg-accent); // Text color on accent background
					}

					.tech-tag {
						background-color: var(--clr-bg-tertiary); // Tertiary background for tech tags
						color: var(--clr-txt-tertiary-on-bg-secondary); // Tertiary text color
						margin-left: var(--spacing-xs);
					}
				}

				.view-project-btn {
					// This is now a span, styled like a button.
					// The whole card is a link, so this is primarily for visual consistency.
					align-self: flex-start; // Align button to the start (left)
					margin-top: auto; // Push button to the bottom of the card content
					display: inline-flex; // Ensure it behaves like a button
					text-decoration: none; // Remove underline
					align-items: center;
					justify-content: center;
					border-radius: var(--radius-xs);
					font-size: var(--fs-sm);
					font-weight: var(--fw-semibold);
					gap: var(--spacing-sm);
					padding: var(--spacing-sm) var(--spacing-md);
					background-color: var(--clr-btn-bg-primary);
					color: var(--clr-txt-primary-on-btn-bg-primary);
					// Add hover/active styles if needed, but the parent link handles the main interaction
				}
			}
		}
	}
</style>
