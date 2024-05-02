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
	}
</style>
