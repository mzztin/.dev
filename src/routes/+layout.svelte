<script>
	import BrandingAvatar from '$lib/components/BrandingAvatar.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import '../app.scss';

	import { page } from '$app/stores';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import { onMount } from 'svelte';
import MetaTags from '$lib/components/MetaTags.svelte';
</script>

<MetaTags />

<LanguageSelector />

{#if $page.url.pathname !== '/'}
	<BackButton />
	<BrandingAvatar />
{/if}

<body>
	<slot />
</body>

<Footer />

<style lang="scss">
	body {
		overflow: hidden;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		text-align: center;
		background-color: #011120;
		color: white;
	}
</style>
