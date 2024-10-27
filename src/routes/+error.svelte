<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="errorPage">
	<h1>Ruh Roh!</h1>
	<h2>Right now you're probably wondering, how did I end up here?</h2>
	<div class="errorDetails">
		<p>Hopefully this clears things up!</p>
		<p class="errorCode">Error Code: {$page?.error?.code}</p>
		<p>{$page?.error?.message}</p>
	</div>
	<button class="backButton"><a href="/">Back to Home</a></button>
</main>

<style>
	* {
		margin: 0;
		font-family: 'Andale Mono', monospace;
	}
	.errorPage {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		height: 100vh;
		gap: 3rem;
		background: url('../lib/assets/background-dark.jpg') no-repeat fixed 50%;
		background-size: cover;
	}
	h1 {
		padding: 1rem 0;
		font-size: 6rem;
		letter-spacing: 3px;
		font-family: 'Jersey 10', sans-serif;
	}
	.errorDetails {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 1.2rem;
	}
	.errorCode {
		font-size: 1.5rem;
		font-weight: 600;
	}
	.backButton {
		/* border: 1px solid var(--text-colour); */
		padding: 0.5rem 1rem;
		background: none;
		font-size: 1.3rem;
		margin-bottom: 5rem;
	}
	.backButton:hover {
		/* background: var(--hover-colour); */
		cursor: pointer;
		transition: background 0.2s;
	}
	.backButton a {
		text-decoration: none;
	}
</style>
