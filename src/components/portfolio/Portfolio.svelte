<script lang="ts">
	import { activeTheme } from '$lib';
	import { loading } from '$lib';
	import Card from './Card.svelte';
	import { onMount } from 'svelte';
	import Carousel from './Carousel.svelte';
	import { writable, type Writable } from 'svelte/store';

	let imagePath: Writable<string> = writable('');
	let showCarousel: Writable<boolean> = writable(false);
	let currentImageIndex = 0;

	export let portfolioData;
	const ignoreList = [
		'github-readme-stats',
		'kieran-lawrence',
		'portfolio-website',
		'klipit',
		'my-kanban-app'
	];

	const openCarousel = (index: any, path: string) => {
		currentImageIndex = index;

		imagePath.set(path);
		showCarousel.set(true);
	};

	const closeCarousel = () => showCarousel.set(false);

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
		return () => document.removeEventListener('keydown', handleKeydown);
	});

	const handleKeydown = (event: KeyboardEvent) => {
		if (showCarousel) {
			if (event.key === 'ArrowRight') {
				currentImageIndex += 1;
			} else if (event.key === 'ArrowLeft') {
				currentImageIndex -= 1;
			} else if (event.key === 'Escape') {
				closeCarousel();
			}
		}
	};
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
						onCardClick={() => openCarousel(0, repo.name)}
					/>
				{/if}
			{/each}
			<Card
				cardLink={'#'}
				cardDescription={'A mobile app for tracking your collection of books. I plan to automate the deployment with Fastlane and GitHub CI/CD.'}
				cardTitle={'coming-soon'}
				cardTextColour={$activeTheme.pallette.textColour}
				cardPillColour={$activeTheme.pallette.backgroundColourAlt}
				skills={['React Native', 'Fastlane', 'GitHub CI/CD']}
			/>
			<Card
				cardLink={'#'}
				cardDescription={'Coming Soon'}
				cardTitle={'coming-soon'}
				cardTextColour={$activeTheme.pallette.textColour}
				cardPillColour={$activeTheme.pallette.backgroundColourAlt}
				skills={[]}
			/>
		{/if}
	</ul>
</div>

{#if $showCarousel}
	<Carousel
		bind:currentImageIndex
		onClose={closeCarousel}
		imagePath={$imagePath}
		backgroundColour={$activeTheme.pallette.backgroundColour}
	/>
{/if}

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
		padding: 1rem 0 0.5rem;
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
			font-size: 3.3rem;
			text-align: center;
			line-height: 1.2;
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
