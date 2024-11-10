<script lang="ts">
	let {
		cardTitle = 'Title',
		cardDescription = 'Description',
		cardTextColour,
		cardPillColour,
		cardLink,
		skills
	}: {
		cardTitle: string;
		cardDescription: string;
		cardTextColour: string;
		cardPillColour: string;
		cardLink: string;
		skills: string[];
	} = $props();

	let formattedTitle = cardTitle.replaceAll('-', ' ');
</script>

<li
	class="cardContainer"
	style={`--card-text-colour: ${cardTextColour};--card-info-bg-colour:${cardPillColour};`}
>
	<a
		class={formattedTitle.includes('bulletin') ? 'card horizontal' : 'card'}
		href={cardLink}
		target="_blank"
	>
		<div class="imageContainer">
			{#await import(`$lib/assets/portfolio/${cardTitle}.png`) then { default: src }}
				<img {src} alt={formattedTitle} class="image" loading="lazy" />
			{/await}
		</div>
		<div class="textContainer">
			<h2 class="title">{formattedTitle}</h2>
			<p class="description">
				{cardDescription}
			</p>
			<div class="skillsContainer">
				<ul>
					{#each skills as skill}
						<li>{skill.replaceAll('-', ' ')}</li>
					{/each}
				</ul>
			</div>
		</div>
	</a>
</li>

<style>
	* {
		font-family: 'Andale Mono', monospace;
		margin: 0;
	}
	.cardContainer {
		display: flex;
		justify-content: stretch;
		backdrop-filter: blur(8px);
		border-radius: 1rem;
	}
	.cardContainer:hover {
		box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
		animation: animate-box-shadow 2s infinite;
	}
	.cardContainer:nth-of-type(1) {
		/* Bulletin */
		grid-row: 2;
		grid-column: 1 / span 4;
	}
	.cardContainer:nth-of-type(2) {
		/* Improved Obsidian */
		grid-row: 1;
		grid-column: 1 / span 3;
	}
	.cardContainer:nth-of-type(3) {
		/** KlipIt */
		grid-row: 1;
		grid-column: 4;
	}
	.cardContainer:nth-of-type(4) {
		/** KanBan App */
		grid-column: 1;
		grid-row: 3;
	}
	.cardContainer:nth-of-type(5) {
		/** Quill */
		grid-column: 2 / span 3;
		grid-row: 3;
	}
	.imageContainer {
		width: 100%;
		height: 60%;
		overflow: hidden;
		border-bottom: 2px solid var(--card-text-colour);
		border-radius: 0.75rem;
	}
	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.textContainer {
		display: flex;
		text-align: justify;
		flex-direction: column;
		height: 40%;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 0 1rem;
	}
	.skillsContainer {
		width: 100%;
	}
	.skillsContainer ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 0;
	}
	.skillsContainer li {
		background: var(--card-info-bg-colour);
		color: var(--card-text-colour);
		padding: 0.4rem 0.6rem;
		list-style: none;
		border-radius: 1rem;
		font-size: 0.9rem;
		text-transform: capitalize;
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		width: 100%;
		text-decoration: none;
		border: 2px solid var(--card-text-colour);
		padding-bottom: 1rem;
		border-radius: 1rem;
	}
	.horizontal {
		flex-direction: row;
		padding: 0;
	}
	.horizontal .imageContainer {
		height: 100%;
	}
	.horizontal .textContainer {
		padding: 0;
		width: 60%;
		height: 100%;
		padding-right: 1rem;
	}
	.title {
		text-transform: capitalize;
		font-size: 2.2rem;
		color: var(--card-text-colour);
	}
	.description {
		font-size: 1.2rem;
		color: var(--card-text-colour);
		overflow: auto;
		word-break: keep-all;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	@keyframes gradient-animation {
		0% {
			background-position: 15% 0%;
		}
		50% {
			background-position: 85% 100%;
		}
		100% {
			background-position: 15% 0%;
		}
	}
	@keyframes animate-box-shadow {
		0% {
			box-shadow: 0 0 2px 3px #5e27b1;
		}
		25% {
			box-shadow: 0 0 2px 3px #3e3be0;
		}
		50% {
			box-shadow: 0 0 2px 3px #8e64ce;
		}
		75% {
			box-shadow: 0 0 2px 3px #a545c2;
		}
		100% {
			box-shadow: 0 0 2px 3px #5b14c7;
		}
	}

	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		.title {
			font-size: 1.6rem;
		}
		.card {
			gap: 0.5rem;
		}
		.textContainer {
			gap: 0.5rem;
		}

		.skillsContainer {
			display: none;
		}
		.description {
			font-size: 1rem;
		}
		.horizontal {
			flex-direction: column;
		}
		.horizontal .imageContainer {
			height: 50%;
		}
		.horizontal .textContainer {
			padding: 0.5rem;
			box-sizing: border-box;
			width: 100%;
			height: 50%;
		}
	}
</style>
