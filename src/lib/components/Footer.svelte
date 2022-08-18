<script lang="ts">
	import { t } from '$lib/lang';
</script>

<footer>
	<p>{$t.FOOTER}</p>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		p {
			position: absolute;

			@media (max-width: 768px) {
				bottom: 0px;
			}

			bottom: 2rem;

			color: gray;
			font-size: 0.8rem;
		}
	}
</style>
