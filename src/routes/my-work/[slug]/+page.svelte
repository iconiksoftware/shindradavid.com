<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { html, frontmatter } = data;
</script>

<main>
	<h1>{frontmatter.title}</h1>

	<figure class="thumbnail">
		<img src={frontmatter.thumbnailUrl} alt={frontmatter.title} />
	</figure>

	<section class="overview">
		<div class="overview-details-grid">
			<!-- Client Detail -->
			<div class="detail-item">
				<span class="detail-label">Client:</span>
				<span class="detail-value">{frontmatter.client}</span>
			</div>

			<!-- Role Detail (Conditionally rendered) -->
			{#if frontmatter.role}
				<div class="detail-item">
					<span class="detail-label">My Role:</span>
					<span class="detail-value">{frontmatter.role}</span>
				</div>
			{/if}

			<!-- Duration Detail (Conditionally rendered) -->
			{#if frontmatter.duration}
				<div class="detail-item">
					<span class="detail-label">Duration:</span>
					<span class="detail-value">{frontmatter.duration}</span>
				</div>
			{/if}

			<!-- Technologies Detail (Spans full width on mobile, half on desktop) -->
			<div class="detail-item technologies-item">
				<span class="detail-label">Technologies:</span>
				<div class="tech-tags">
					{#each frontmatter.technologies as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="overview-actions">
			{#if frontmatter.liveUrl}
				<a href={frontmatter.liveUrl} target="_blank" class="btn primary">
					Open Project
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-external-link"
						><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path
							d="M15 3h6v6"
						/><path d="M10 14L21 3" /></svg
					>
				</a>
			{/if}
			{#if frontmatter.githubUrl}
				<a href={frontmatter.githubUrl} target="_blank" class="btn secondary">
					View on GitHub
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-github"
						><path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5 0 4.1-1.7 4.1-3.6 0-1.2-.5-2.2-1.3-3 0-.4.1-1.5 0-3.6 0 0-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6.2 0c-2.5-1.6-3.6-1.3-3.6-1.3-.1 2.1 0 3.2 0 3.6-.8.8-1.3 1.8-1.3 3 0 1.9.6 3.6 4.1 3.6a4.8 4.8 0 0 0-1 3.2v4"
						/></svg
					>
				</a>
			{/if}
		</div>
	</section>

	<section class="content">
		{@html html}
	</section>
</main>

<style lang="scss">
	@use '../../../styles/utils';
	main {
		@include utils.respond-to('md-screens') {
			width: 50vw;
			margin: 0 auto;
		}

		h1 {
			text-align: center;
			margin-top: var(--spacing-lg);
			margin-bottom: var(--spacing-md);
			margin-left: auto;
			margin-right: auto;

			@include utils.respond-to('md-screens') {
				width: 40vw;
			}
		}

		.thumbnail {
			height: 100%;
		}

		.overview {
			background-color: var(--clr-bg-secondary); // Secondary background for the overview box
			border-radius: var(--radius-sm); // Rounded corners
			padding: var(--spacing-xl); // Internal padding
			box-shadow: var(--shadow-md); // Shadow for depth
			margin-bottom: var(--spacing-4xl); // Space below overview section
			margin-top: var(--spacing-lg);

			.overview-details-grid {
				display: grid;
				grid-template-columns: 1fr; // Single column on mobile
				gap: var(--spacing-md); // Gap between detail items
				margin-bottom: var(--spacing-lg); // Space before buttons

				@include utils.respond-to('md-screens') {
					grid-template-columns: repeat(2, 1fr); // Two columns on medium screens
					// Ensure technologies item spans both columns on desktop
					.technologies-item {
						grid-column: span 2;
					}
				}

				.detail-item {
					display: flex;
					flex-direction: column; // Stack label and value on mobile
					align-items: flex-start; // Align items to the start

					@include utils.respond-to('md-screens') {
						flex-direction: row; // Row layout on desktop
						align-items: center; // Align items vertically in the center
					}
				}

				.detail-label {
					font-weight: var(--fw-semibold); // Bold label
					color: var(--clr-txt-primary-on-bg-secondary); // Primary text color
					margin-bottom: var(--spacing-xxs); // Small space below label on mobile
					@include utils.respond-to('md-screens') {
						margin-right: var(--spacing-xs); // Space between label and value on desktop
						margin-bottom: 0; // Remove bottom margin on desktop
					}
				}

				.detail-value {
					color: var(--clr-txt-secondary-on-bg-secondary); // Secondary text color for value
					font-size: var(--fs-base); // Base font size
				}

				.tech-tags {
					display: flex;
					flex-wrap: wrap;
					gap: var(--spacing-xs); // Space between tags
					margin-top: var(--spacing-xs); // Small space above tags
					@include utils.respond-to('md-screens') {
						margin-top: 0; // Remove top margin on desktop if in row
					}

					.tech-tag {
						background-color: var(--clr-bg-tertiary); // Tertiary background for tech tags
						color: var(--clr-txt-tertiary-on-bg-secondary); // Tertiary text color
						font-size: var(--fs-xs); // Extra small font size
						font-weight: var(--fw-medium);
						padding: var(--spacing-xs) var(--spacing-sm); // Padding
						border-radius: var(--radius-xxs); // Rounded corners
						white-space: nowrap; // Prevent wrapping within a tag
					}
				}
			}

			.overview-actions {
				display: flex;
				flex-direction: column; // Stack buttons on mobile
				gap: var(--spacing-md); // Space between buttons
				margin-top: var(--spacing-lg); // Space above buttons

				@include utils.respond-to('md-screens') {
					flex-direction: row; // Row layout on desktop
					justify-content: center; // Center buttons horizontally
				}

				.btn {
					display: inline-flex; // Ensure button content is aligned
					align-items: center; // Align text and icon vertically
					justify-content: center; // Center content horizontally
					gap: var(--spacing-sm); // Space between text and icon
					width: 100%; // Full width on mobile
					@include utils.respond-to('md-screens') {
						width: auto; // Auto width on desktop
					}
				}
			}
		}

		.content {
			margin-top: var(--spacing-lg);
		}
	}
</style>
