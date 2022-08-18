<script>
	import BackButton from '$lib/components/BackButton.svelte';
	import BrandingAvatar from '$lib/components/BrandingAvatar.svelte';
	import Link from '$lib/components/Link.svelte';
	import Technology from '$lib/components/Technology.svelte';

	import { t } from "$lib/lang";
</script>

<h1>about me</h1>

<div class="text">
	<p>{$t.ABOUT_PAGE.GREETING}</p>
	<p>
		{$t.ABOUT_PAGE.INFORMATION} <!-- TODO FILTER LINK OUT OF STRING!!! -->
	</p>
	<p />
</div>

<div class="technologies">
	<h1>{$t.ABOUT_PAGE.TECHNOLOGIES}</h1>

	<ul>
		<li>JavaScript/TypeScript</li>
		<li>Node</li>
		<li>Python</li>
		<li>PHP</li>
		<li>HTML</li>
		<li>CSS/SCSS</li>
		<li>PostgreSQL</li>
		<li>Svelte/Svelte-Kit</li>
	</ul>
</div>

<style lang="scss">
	.text {
		p {
			margin-bottom: 0.3rem;
		}
	}

	.technologies {
		text-align: center;

		ul {
			display: inline-block;
			text-align: left;
			font-size: 1.13rem;
		}
	}
</style>
