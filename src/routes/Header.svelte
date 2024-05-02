<script lang="ts">
	import NavLink from './NavLink.svelte';

	let openDrawer = $state(false);
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
		@include mixins.add-section-lr-padding();
		height: var(--header-height);

		&__nav {
			display: flex;
			gap: var(--spacing-lg);
		}
	}
</style>
