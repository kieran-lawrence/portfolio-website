<script lang="ts">
	import { loading } from '$lib';
	import Card from './Card.svelte';

	export let portfolioData;
	const ignoreList = ['github-readme-stats', 'kieran-lawrence'];
</script>

<div id="portfolio">
	<ul class="portfolioCards">
		{#if $loading.isLoading}
			<div>Loading...</div>
		{:else}
			{#each portfolioData.repositories as repo}
				{#if !ignoreList.includes(repo.name)}
					<Card
						cardBGImage={`/src/lib/assets/portfolio/${repo.name}.png`}
						cardLink={repo.html_url}
						cardDescription={repo.description}
						cardTitle={repo.name}
						cardTitleColor="#f1f1f1"
						cardDescriptionColor="#f1f1f1"
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
		height: 100vh;
		border: 1px solid red;
	}
	.portfolioCards {
		max-width: 70vw;
		display: grid;
		padding: 2rem 5rem 0 5rem;
		gap: 2rem;
		list-style: none;
		justify-content: 'center';
		transition: 'gap 0.25s';
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>
