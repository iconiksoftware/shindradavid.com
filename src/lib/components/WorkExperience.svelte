<script lang="ts">
	// Define the type for a single work experience entry
	export type Experience = {
		id: number;
		date: string;
		title: string;
		company: string;
		description: string;
		// New fields you can add to your data:
		responsibilities?: string[]; // Key responsibilities in bullet points
		achievements?: string[]; // Quantifiable achievements
		technologiesUsed?: string[]; // Specific tech stack for this role/period
		challengesSolutions?: { challenge: string; solution: string }[]; // Problems faced and how you solved them
		link?: string; // Link to company website or related projects
	};

	// Svelte 5: Define props using $props()
	let { experiences }: { experiences: Experience[] } = $props();

	// It's assumed the 'experiences' array is already sorted chronologically (latest first)
	// If not, you can add a $derived block here to sort it:
	// let sortedExperiences = $derived([...experiences].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
</script>

<section class="work-experience-section">
	<h2>Work Experience</h2>
	<p class="intro-paragraph">
		My journey in software development and design has been shaped by diverse roles, from freelancing
		to leading IT initiatives at Maurice Group.
	</p>

	<div class="experience-list">
		{#each experiences as experience (experience.id)}
			<div class="experience-card">
				<div class="experience-date-container">
					<p class="experience-date">{experience.date}</p>
				</div>
				<div class="experience-details-container">
					<h3 class="job-title">{experience.title}</h3>
					<p class="company-name">{experience.company}</p>
					<p class="job-description">{experience.description}</p>

					{#if experience.link}
						<a href={experience.link} target="_blank" class="btn secondary view-link">
							Learn More
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
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '../../styles/utils'; // Adjust path as needed

	.work-experience-section {
		padding-top: var(--spacing-9xl); // Top padding
		padding-bottom: var(--spacing-9xl); // Bottom padding
		background-color: var(--clr-bg-primary); // Primary background color
		color: var(--clr-txt-primary-on-bg-primary); // Primary text color

		h2 {
			text-align: center;
			font-size: var(--fs-2xl);
			margin-bottom: var(--spacing-md);
			color: var(--clr-txt-primary-on-bg-primary);
		}

		.intro-paragraph {
			text-align: center;
			font-size: var(--fs-md);
			max-width: 700px;
			margin: 0 auto var(--spacing-6xl) auto;
			color: var(--clr-txt-secondary-on-bg-primary);
		}
	}

	.experience-list {
		display: flex;
		flex-direction: column; // Stack cards vertically
		gap: var(--spacing-3xl); // Space between experience cards
		max-width: 900px; // Limit overall width for readability
		margin: 0 auto; // Center the list
	}

	.experience-card {
		background-color: var(--clr-bg-secondary);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-md);
		display: flex;
		flex-direction: column; // Stack date and details on mobile
		overflow: hidden; // Ensure border-radius applies
		transition:
			transform var(--animation-speed-normal) var(--animation-fn-ease-out),
			box-shadow var(--animation-speed-normal) var(--animation-fn-ease-out);

		&:hover {
			transform: translateY(-5px);
			box-shadow: var(--shadow-lg);
		}

		@include utils.respond-to('md-screens') {
			flex-direction: row; // Horizontal layout on desktop
		}
	}

	.experience-date-container {
		flex-shrink: 0; // Prevent date container from shrinking
		padding: var(--spacing-lg);
		background-color: var(--clr-bg-tertiary); // Slightly different background for date
		color: var(--clr-txt-primary-on-bg-tertiary);
		text-align: center;
		border-bottom: 1px solid var(--clr-divider-primary-on-bg-tertiary); // Divider on mobile

		@include utils.respond-to('md-screens') {
			width: 180px; // Fixed width for the date section on desktop
			border-right: 1px solid var(--clr-divider-primary-on-bg-tertiary); // Vertical divider on desktop
			border-bottom: none; // Remove bottom divider
			display: flex; // Use flex to center date vertically
			align-items: center;
			justify-content: center;
		}

		.experience-date {
			font-size: var(--fs-sm);
			font-weight: var(--fw-semibold);
			margin: 0; // Remove default paragraph margins
			line-height: 1.2; // Adjust line height for better appearance
		}
	}

	.experience-details-container {
		flex-grow: 1; // Allow details to take remaining space
		padding: var(--spacing-lg);
		color: var(--clr-txt-primary-on-bg-secondary); // Default text color for details

		h3,
		p {
			color: var(--clr-txt-primary-on-bg-secondary); // Ensure text color consistency
		}

		.job-title {
			font-size: var(--fs-md);
			font-weight: var(--fw-semibold);
			margin-top: 0;
			margin-bottom: var(--spacing-xxs);
		}

		.company-name {
			font-size: var(--fs-sm);
			color: var(--clr-txt-secondary-on-bg-secondary);
			margin-bottom: var(--spacing-sm);
		}

		.job-description {
			font-size: var(--fs-base);
			color: var(--clr-txt-tertiary-on-bg-secondary);
			margin-bottom: var(--spacing-md);
		}

		.view-link {
			margin-top: var(--spacing-md);
			display: inline-flex;
			align-items: center;
			gap: var(--spacing-sm);
		}
	}
</style>
