<script lang="ts">
	export let link: string;
</script>

<a href={link}>
	<slot />
</a>

<style lang="scss">
	a {
		color: aliceblue;
		text-decoration: underline;
		transition: color 0.3s ease;
		&:hover {
			color: rgb(23, 87, 176);
		}
	}
</style>
