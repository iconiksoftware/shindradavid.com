<script lang="ts">
	import { WorkExperienceCard } from '$lib/components';
	import MyWorkCard from '$lib/components/MyWorkCard.svelte';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { workExperience } = data;
</script>

<main class="main work-page">
	<section class="work-experience-section">
		<h1>Work Experience</h1>
		<p class="intro-paragraph">
			My journey in software development and design has been shaped by diverse roles, from
			freelancing to leading IT initiatives at Maurice Group.
		</p>

		<div class="experience-list">
			{#each workExperience as experience (experience.order)}
				<WorkExperienceCard {experience} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	@use 'sass:color';
	@use '../../styles/utils';

	.work-experience-section {
		padding-top: var(--spacing-9xl);
		padding-bottom: var(--spacing-9xl);
		background-color: var(--clr-bg-primary);
		color: var(--clr-txt-primary-on-bg-primary);

		h1 {
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
		flex-direction: column;
		gap: var(--spacing-3xl);
		max-width: 900px;
		margin: 0 auto;
	}
</style>
