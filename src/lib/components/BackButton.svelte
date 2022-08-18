<script lang="ts">
	import { t } from '$lib/lang';
</script>

<div class="back">
	<a href="/">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg>

		<p>{$t.BACK_BUTTON}</p>
	</a>
</div>

<style lang="scss">
	.back {
		display: flex;
		justify-content: center;

		position: absolute;

		top: 50px;
		left: 50px;
	}

	a {
		fill: white;
		text-decoration: none;
		transition: color 0.3s ease;
		text-align: center;

		color: white;

		&:hover {
			color: rgb(23, 87, 176);
		}

		svg {
			width: 30px;
			height: 30px;
			margin-right: 10px;
			fill: white;

			transition: all 0.2s ease-in-out;
		}
	}
</style>
