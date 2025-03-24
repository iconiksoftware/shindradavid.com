<script lang="ts">
	interface Props {
		href: string;
		name: string;
	}

	let { href, name }: Props = $props();
</script>

<a {href}>{name}</a>

<style lang="scss">
	a {
		text-decoration: none;
		font-size: var(--fs-sm);
		font-weight: var(--fw-medium);
		font-weight: var(--fw-bold);

		&:hover {
			font-weight: var(--fw-bold);
		}
	}
</style>
