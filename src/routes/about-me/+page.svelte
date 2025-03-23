<script lang="ts">
	import {
		Linux,
		Figma,
		Svelte,
		NestJS,
		Postgresql,
		React,
		Javascript,
		Nodejs,
		Code,
		PaintBrush,
		CloudComputing,
		Redis
	} from '$lib/icons';

	const skills = [
		{
			name: 'Languages',
			icon: Code,
			subSkills: [
				{
					name: 'JavaScript',
					icon: Javascript
				}
			]
		},
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
				},
				{
					name: 'React Native',
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
					name: 'NestJS',
					icon: NestJS
				},
				{
					name: 'PostgreSQL',
					icon: Postgresql
				},
				{
					name: 'Redis',
					icon: Redis
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

	<section>
		<p>
			Hi there, I’m Shindra David, a self-taught full-stack developer based in Uganda with a passion
			for creating dynamic web and mobile applications.
		</p>
	</section>

	<section>
		<h2>My Journey into Coding</h2>
		<p>
			I do not have technical background, my journey into programming began unexpectedly. I was in
			business school, taking a digital marketing class, when our lecturer introduced the concept of
			websites as powerful marketing tools. That single lesson sparked my curiosity. How were
			websites built? What made them so effective? I wanted to understand more.
		</p>

		<p>
			As I researched the subject, I stumbled upon the basics of web development—starting with HTML.
			The more I learned, the more fascinated I became. I soon discovered Python, and before I knew
			it, I was deep into the Django framework and PostgreSQL, exploring how backend systems worked.
		</p>

		<p>
			But my journey didn’t stop there. The real turning point came when I found JavaScript. Its
			flexibility and vast ecosystem opened up a whole new world for me. I quickly transitioned to
			working with Svelte, and SvelteKit for frontend development and NestJS, Node.js, and
			PostgreSQL for backend applications.
		</p>

		<p>
			More recently, I started learning React, mostly as a stepping stone into React Native, since I
			wanted to expand my skills into mobile app development.
		</p>

		<p>
			Alongside my development journey, I’ve also ventured into the world of design. I began
			learning Figma, and over time, I’ve developed the skills to create flyers and other digital
			materials. I’m excited to explore UI design in the future and create beautiful, functional
			user interfaces that enhance user experience.
		</p>

		<p>
			This journey started at the end of 2020, during the COVID-19 lockdown. With plenty of free
			time, I fully immersed myself in coding, spending countless hours learning, building projects,
			and refining my skills. What began as a casual interest turned into a deep passion—and
			ultimately, a career as a full-stack developer.
		</p>
	</section>

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

	section > p {
		margin-bottom: var(--spacing-lg);
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
					flex-wrap: wrap;
					gap: var(--spacing-sm);

					.sub_skill {
						padding: var(--spacing-xs) var(--spacing-md);
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
