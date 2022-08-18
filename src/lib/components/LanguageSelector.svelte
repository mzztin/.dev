<script lang="ts">
	import { getLanguage, language, setLanguage, type AvailableLanguages } from '$lib/lang';
	import { get } from 'svelte/store';

	const changeLanguage = (lang: AvailableLanguages) => {
		setLanguage(lang);
	};
</script>

<div class="selector">
	<p>
		<span
			style={$language === 'EN' ? 'font-weight: bold;' : ''}
			class={`${$language === 'EN' ? 'active' : ''}`}
			on:click={() => changeLanguage('EN')}>EN</span
		>
		|
		<span
			class={`${$language === 'DE' ? 'active' : ''}`}
			style={$language === 'DE' ? 'font-weight: bold;' : ''}
			on:click={() => changeLanguage('DE')}>DE</span
		>
	</p>
</div>

<style lang="scss">
	.selector {
		position: relative;

		p {
			position: absolute;
			top: 15%;
			right: 10%;
		}

		span {
			&:hover {
				cursor: pointer;
				text-decoration: underline;
			}

			.active {
				text-decoration: dotted;
			}
		}
	}
</style>
