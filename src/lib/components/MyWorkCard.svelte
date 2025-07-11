<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<a href="/my-work/{project.slug}" class="project-card-link">
	<article class="project-card">
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
	@use '../../styles/utils';

	.project-card-link {
		text-decoration: none;

		.project-card {
			background-color: var(--clr-bg-secondary);
			border-radius: var(--radius-sm);
			box-shadow: var(--shadow-md);
			transition:
				transform var(--animation-speed-normal) var(--animation-fn-ease-out),
				box-shadow var(--animation-speed-normal) var(--animation-fn-ease-out);

			&:hover {
				transform: translateY(-5px);
				box-shadow: var(--shadow-lg);
			}

			.project-image {
				border-top-left-radius: var(--radius-base);
				border-top-right-radius: var(--radius-base);
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

				.project-meta {
					display: flex;
					flex-direction: column;
					gap: var(--spacing-xs); // Space between tags
					margin-top: var(--spacing-sm); // Top margin
					margin-bottom: var(--spacing-md); // Bottom margin

					.category-tag {
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
