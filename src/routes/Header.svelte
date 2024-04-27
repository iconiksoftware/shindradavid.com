<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<header class="header">
	<a href="/" class="header__logo">Shindra David</a>

	<nav class="header__nav">
		<NavLink href="/" name="Home" />
		<NavLink href="/about-me" name="About me" />
		<NavLink href="/what-i-do" name="What I do" />
		<NavLink href="/my-work" name="My work" />
		<NavLink href="/blog" name="Blog" />
	</nav>

	<a href="/lets-connect" class="btn primary w-fit-content">Let's connect</a>
</header>

<style lang="scss">
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
		backdrop-filter: blur(3px);
		width: 80vw;
		border-radius: var(--radius-xs);
		box-shadow: var(--shadow-md);

		&__nav {
			display: flex;
			gap: var(--spacing-lg);
		}
	}
</style>
