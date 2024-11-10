<script lang="ts">
	import { activeTheme } from '$lib';
	import { loading } from '$lib';
	import Card from './Card.svelte';

	export let portfolioData;
	const ignoreList = ['github-readme-stats', 'kieran-lawrence', 'portfolio-website'];
</script>

<div id="portfolio" style={`--text-shadow-colour:${$activeTheme.pallette.textShadowColour}`}>
	<h2>Portfolio</h2>
	<ul class="portfolioCards">
		{#if $loading.isLoading}
			<div>Loading...</div>
		{:else}
			{#each portfolioData.repositories as repo}
				{#if !ignoreList.includes(repo.name)}
					<Card
						cardLink={repo.html_url}
						cardDescription={repo.description}
						cardTitle={repo.name}
						cardTextColour={$activeTheme.pallette.textColour}
						cardPillColour={$activeTheme.pallette.backgroundColourAlt}
						skills={repo.topics}
					/>
				{/if}
			{/each}
		{/if}
	</ul>
</div>

<style>
	#portfolio {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h2 {
		font-size: 5rem;
		letter-spacing: 3px;
		text-shadow: 3px 3px 2px var(--text-shadow-colour);
		font-family: 'Coiny', system-ui;
		margin: 0;
	}
	.portfolioCards {
		width: 60vw;
		max-width: 85rem;
		display: grid;
		padding: 0;
		gap: 2rem;
		list-style: none;
		justify-content: 'center';
		transition: 'gap 0.25s';
		grid-template-columns: 1fr 50px 50px 1fr;
		grid-template-rows: minmax(150px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr);
		margin: 0;
	}
	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		h2 {
			font-size: 3.5rem;
		}
		.portfolioCards {
			width: 90vw;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
	/* Tablet Styling */
	@media (min-width: 681px) and (max-width: 1024px) {
		h2 {
			font-size: 3.8rem;
		}
		.portfolioCards {
			width: 90vw;
			display: grid;
			gap: 1rem;
		}
	}
</style>
