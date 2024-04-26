<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<a {href}>{name}</a>

<style lang="scss">
	a {
		text-decoration: none;
	}
</style>
