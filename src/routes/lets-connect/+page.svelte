<script lang="ts">
	import { Seo } from '$lib/components';

	const socialLinks = [
		{
			icon: 'ri-whatsapp-fill',
			label: 'WhatsApp',
			value: '+256 782 346 200',
			url: 'https://wa.me/256782346200'
		},
		{
			icon: 'ri-linkedin-box-fill',
			label: 'LinkedIn',
			value: 'shindradavid',
			url: 'https://linkedin.com/in/shindradavid'
		},
		{
			icon: 'ri-twitter-x-fill',
			label: 'X',
			value: '@shindradavid',
			url: 'https://x.com/shindradavid'
		},
		{
			icon: 'ri-instagram-fill',
			label: 'Instagram',
			value: '@shindra_david',
			url: 'https://instagram.com/shindra_david'
		},
		{
			icon: 'ri-github-fill',
			label: 'GitHub',
			value: 'shindradavid',
			url: 'https://github.com/shindradavid'
		}
	];
</script>

<Seo
	title="Let's Connect | Shindra David"
	description="Have a project idea or collaboration in mind? Get in touch with me for web development, mobile app design, or digital solutions. Let’s build something impactful together."
/>

<main>
	<section class="connect-page">
		<div class="contact-card">
			<h1>Let's Connect</h1>
			<p>I'd love to hear from you.</p>

			<div class="social-grid">
				{#each socialLinks as { icon, label, value, url }}
					<a class="social-card" href={url} target="_blank" rel="noopener">
						<i class={icon}></i>
						<div class="text">
							<span class="label">{label}</span>
							<span class="value">{value}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	@use '../../styles/utils';

	.connect-page {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-sm);
		background-color: var(--clr-bg-primary);
		color: var(--clr-txt-primary-on-bg-primary);
		min-height: 80vh;

		.contact-card {
			background: var(--clr-bg-secondary, #1e1e1e);
			padding: var(--spacing-lg);
			border-radius: var(--radius-lg, 12px);
			box-shadow: 0 4px 12px var(--clr-shadow, rgba(0, 0, 0, 0.2));
			width: 100%;
			max-width: 768px;
			text-align: center;

			h1 {
				margin-bottom: var(--spacing-lg);
				color: var(--clr-accent-1);
			}

			p {
				margin-bottom: var(--spacing-xl);
				color: var(--clr-txt-secondary-on-bg-primary);
			}

			.social-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
				gap: var(--spacing-lg);

				.social-card {
					display: flex;
					align-items: center;
					gap: var(--spacing-md);
					background-color: var(--clr-bg-primary);
					border: 1px solid var(--clr-outline-secondary-on-bg-primary);
					padding: var(--spacing-md);
					border-radius: var(--radius-md);
					text-decoration: none;
					transition:
						background-color 0.3s,
						border-color 0.3s;

					&:hover {
						border-color: var(--clr-accent-1);
						transform: translateY(-5px);
					}

					i {
						font-size: var(--fs-3xl);
						color: var(--clr-accent-1);
					}

					.text {
						display: flex;
						flex-direction: column;
						align-items: flex-start;

						.label {
							font-weight: bold;
							color: var(--clr-txt-primary-on-bg-primary);
						}

						.value {
							font-size: var(--fs-base);
							color: var(--clr-txt-secondary-on-bg-primary);
						}
					}
				}
			}
		}
	}
</style>
