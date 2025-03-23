<script lang="ts">
	import {
		Linux,
		Figma,
		Expo,
		Svelte,
		NestJS,
		Postgresql,
		React,
		Javascript,
		Nodejs,
		Code,
		PaintBrush,
		CloudComputing
	} from '$lib/icons';

	const skills = [
		{
			name: 'Frontend development',
			icon: Code,
			subSkills: [
				{
					name: 'Svelte',
					icon: Svelte
				},
				{
					name: 'React',
					icon: React
				}
			]
		},
		{
			name: 'Backend development',
			icon: Code,
			subSkills: [
				{
					name: 'NodeJS',
					icon: Nodejs
				},
				{
					name: 'PostgreSQL',
					icon: Postgresql
				}
			]
		},
		{
			name: 'Cloud & DevOps',
			icon: CloudComputing,
			subSkills: [
				{
					name: 'Linux',
					icon: Linux
				}
			]
		},
		{
			name: 'Design',
			icon: PaintBrush,
			subSkills: [
				{
					name: 'Figma',
					icon: Figma
				}
			]
		}
	];
</script>

<main>
	<h1>About me</h1>

	<section class="skills">
		<header class="skills__header">
			<h1>Skills</h1>
			<p>Here is a peek under the hood of my tech toolbox.</p>
		</header>

		<div class="skills__container">
			{#each skills as { name, icon: Icon, subSkills }}
				<article class="skill">
					<header class="skill__header">
						<span class="icon">
							<Icon />
						</span>
						<h2 class="name">{name}</h2>
					</header>

					<div class="skill__sub_skills">
						{#each subSkills as { name, icon: Icon }}
							<div class="sub_skill">
								<span class="icon">
									<Icon />
								</span>

								<p class="name">{name}</p>
							</div>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	main {
		padding: 32px;
	}

	.skills {
		&__container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: var(--spacing-md);

			.skill {
				padding: var(--spacing-xl);
				background-color: var(--clr-bg-secondary);
				border-radius: var(--radius-base);

				&__header {
					display: flex;
					align-items: center;
					gap: var(--spacing-sm);
					margin-bottom: var(--spacing-md);

					.icon {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: var(--spacing-sm);
						border-radius: var(--radius-sm);
						background-color: #414141;
						font-size: 32px;
						height: fit-content;
					}

					.name {
						font-size: var(--fs-base);
					}
				}

				&__sub_skills {
					display: flex;
					flex-direction: row;
					gap: var(--spacing-sm);

					.sub_skill {
						padding: var(--spacing-xs) var(--spacing-sm);
						display: flex;
						align-items: center;
						gap: var(--spacing-sm);
						border: 1px solid #646464ff;
						border-radius: 32px;
						width: fit-content;
						.icon {
							line-height: 1;
							font-size: 18px;
						}

						.name {
							font-size: var(--fs-sm);
							font-weight: var(--fw-semibold);
						}
					}
				}
			}
		}
	}
</style>
