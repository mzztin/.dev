<script lang="ts">
	import { technologies } from '$lib/db';

	export let name: string;

	const data = technologies[name];

	let isOpen = true;

	const open = () => {
		isOpen = true;
	};

	const close = () => {
		isOpen = false;
	};
</script>

{#if data}
	<p on:mouseover={open} on:mouseleave={close} on:focus={() => {}}>{data.name}</p>

	<div class="info" style={`visibility: ${isOpen ? 'visible' : 'hidden'}`}>
		<img src={data.logo} alt={data.name} />

		<p>{data.description}</p>
	</div>
{:else}
	<p>error technology not found.</p>
{/if}

<style lang="scss">
	p {
		margin-bottom: 0.5rem;
	}

	.info {
		position: absolute;

		width: 90px;
		height: 5px;

		background-color: white;
		color: black;

		border: 2px solid snow;
		padding: 50px;
		margin: 20px;

		img {
			margin-right: 10px;
			margin-top: 10px;

			width: 20px;
			height: 20px;
		}
	}
</style>
