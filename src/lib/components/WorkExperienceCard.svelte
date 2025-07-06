<script lang="ts">
	import { type WorkExperience } from '$lib/types';

	let { experience }: { experience: WorkExperience } = $props();
</script>

<div class="experience-card">
	<div class="experience-date-container">
		<p class="experience-date">{experience.duration}</p>
	</div>
	<div class="experience-details-container">
		<h3 class="job-title">{experience.title}</h3>
		<p class="company-name">{experience.company}</p>
		<p class="job-description">{experience.description}</p>

		<a href="/work-experience/{experience.slug}" class="btn secondary view-link"> Learn More </a>
	</div>
</div>

<style lang="scss">
	@use '../../styles/utils';

	.experience-card {
		background-color: var(--clr-bg-secondary);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-md);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition:
			transform var(--animation-speed-normal) var(--animation-fn-ease-out),
			box-shadow var(--animation-speed-normal) var(--animation-fn-ease-out);

		&:hover {
			transform: translateY(-5px);
			box-shadow: var(--shadow-lg);
		}

		@include utils.respond-to('md-screens') {
			flex-direction: row;
		}
	}

	.experience-date-container {
		flex-shrink: 0;
		padding: var(--spacing-lg);
		background-color: var(--clr-bg-tertiary);
		color: var(--clr-txt-primary-on-bg-tertiary);
		text-align: center;
		border-bottom: 1px solid var(--clr-divider-primary-on-bg-tertiary);

		@include utils.respond-to('md-screens') {
			width: 180px;
			border-right: 1px solid var(--clr-divider-primary-on-bg-tertiary);
			border-bottom: none;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.experience-date {
			font-size: var(--fs-sm);
			font-weight: var(--fw-semibold);
			margin: 0;
			line-height: 1.2;
		}
	}

	.experience-details-container {
		flex-grow: 1;
		padding: var(--spacing-lg);
		color: var(--clr-txt-primary-on-bg-secondary);

		h3,
		p {
			color: var(--clr-txt-primary-on-bg-secondary);
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
