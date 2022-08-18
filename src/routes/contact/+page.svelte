<script lang="ts">
	import BackButton from '$lib/components/BackButton.svelte';
	import BrandingAvatar from '$lib/components/BrandingAvatar.svelte';
	import Link from '$lib/components/Link.svelte';

	let email: string;

	let message: string;

	const submit = () => {
		console.log(`email: ${email} message: ${message}`);
	};

	import { t } from '$lib/lang';
</script>

<h1>{$t.CONTACT_PAGE.TITLE}</h1>

<form>
	<input bind:value={email} placeholder={$t.CONTACT_PAGE.EMAIL_INPUT} type="email" />

	<textarea
		bind:value={message}
		placeholder={$t.CONTACT_PAGE.MESSAGE_INPUT}
		contenteditable="true"
	/>

	<button type="button" on:click={submit}>{$t.CONTACT_PAGE.SUBMIT_BUTTON}</button>
</form>

<div class="discord">
	<h3>
		{$t.CONTACT_PAGE.OTHER_INFORMATION}
	</h3>
</div>

<style lang="scss">
	::placeholder {
		text-align: center;
		display: flex;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50%;
		text-align: center;
		background-color: #011120;
		color: white;
		font-size: 1rem;

		input {
			width: 70%;
			height: 50px;
			margin-bottom: 10px;
			border-radius: 5px;
			border: none;
			background-color: #011120;
			color: white;
			font-size: 1.2rem;
			text-align: center;
			border: 2px solid white;
		}

		textarea {
			width: 70%;
			height: 200px;
			margin-bottom: 10px;
			border-radius: 5px;
			border: none;
			background-color: #011120;
			color: white;
			font-size: 1.2rem;
			text-align: center;
			border: 2px solid white;
		}

		button {
			width: 70%;
			height: 50px;
			margin-bottom: 10px;
			border-radius: 5px;
			border: none;
			background-color: #011120;
			color: white;
			font-size: 1.2rem;
			text-align: center;
			border: 2px solid white;
		}
	}

	.discord {
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h3 {
			font-size: 1.2rem;
			font-weight: bold;
			margin-bottom: 0.1rem;
		}

		h4 {
			font-size: 1.2rem;
			font-weight: bold;
		}

		span {
			text-decoration: underline;
		}
	}
</style>
