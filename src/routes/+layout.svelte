<script lang="ts">
	import '../styles/global.scss';

	import NavLink from './NavLink.svelte';

	const { children } = $props();

	let openDrawer = $state(false);
</script>

<svelte:head>
	<meta name="theme-color" content="#16181d" />
	<link rel="stylesheet" href="/remixicon/remixicon.css" />
	<!-- <link rel="manifest" href="manifest.webmanifest" /> -->
	<link rel="alternate" href="/rss.xml" type="application/rss+xml" title="RSS" />
</svelte:head>

<header class="header">
	<a href="/" class="header__logo">
		<img src="/images/logo.png" alt="Shindra David" />
	</a>

	<nav class="header__nav">
		<NavLink href="/" name="Home" />
		<NavLink href="/about-me" name="About me" />
		<NavLink href="/what-i-do" name="What I do" />
		<NavLink href="/my-work" name="My work" />
		<NavLink href="/blog" name="Blog" />
	</nav>

	<a href="/lets-connect" class="header__cta btn primary w-fit-content">Let's connect</a>
</header>

<div class="main">
	{@render children()}
</div>

<footer class="footer">
	<p class="footer__copy">&copy; Shindra David {new Date().getFullYear()}. All rights reserved.</p>
	<p class="footer__credits">
		Built with <span style="color: hsl(0, 74%, 50%);"><i class="ri-heart-fill"></i></span> and
		<span style="color: hsl(12, 98%, 50%);"><i class="ri-svelte-fill"></i></span>
		by
		<a href="http://twitter.com/shindradavid" target="_blank" rel="noopener noreferrer">
			Shindra David
		</a>
	</p>
</footer>

<style lang="scss">
	@use '../styles/utils';

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
		padding: var(--spacing-sm);
		position: fixed;
		top: var(--spacing-sm);
		left: 50%;
		transform: translate(-50%, 0);
		background-color: var(--clr-bg-primary-alpha);
		backdrop-filter: blur(4px);
		width: 80vw;
		border-radius: 280px;
		box-shadow: var(--shadow-md);
		border: 1px solid #ffffff;

		&__logo {
			img {
				height: 48px;
				width: 48px;
				border-radius: 50%;
			}
		}

		&__nav {
			display: flex;
			gap: var(--spacing-lg);
		}

		&__cta {
			border-radius: 64px;
		}
	}

	.main {
		margin-top: calc(var(--header-height) + var(--spacing-lg));
	}

	.footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		margin: var(--spacing-lg) 0 0 0;
		padding: var(--spacing-lg) 0;
		border-top: 1px solid var(--clr-outline-secondary-on-bg-primary);
		@include utils.add-section-lr-padding();

		p {
			margin: 0;
		}

		&__copy {
			font-size: var(--fs-sm);
		}

		&__credits {
			font-size: var(--fs-xs);
		}
	}
</style>
