<script lang="ts">
	const brand = 'martin.png';
</script>

<div class="container">
	<img src={brand} alt="brand" />
</div>

<style lang="scss">
	.container {
		position: relative;
		height: 0vh;
		width: 100vw;
	}

	img {
		position: absolute;
		top: 40px;
		right: 40px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
