<script lang="ts">
	let {
		cardTitle = 'Title',
		cardBGImage,
		cardDescription = 'Description',
		cardTitleColor = '#f1f1f1',
		cardDescriptionColor = '#f1f1f1',
		cardLink
	}: {
		cardTitle: string;
		cardBGImage: string;
		cardDescription: string;
		cardTitleColor: string;
		cardDescriptionColor: string;
		cardLink: string;
	} = $props();

	let formattedTitle = cardTitle.replaceAll('-', ' ');
</script>

<li
	class="cardContainer"
	style={`--card-title-colour: ${cardTitleColor};--card-description-colour: ${cardDescriptionColor}`}
>
	<a class="card" href={cardLink} target="_blank">
		<div class="imageContainer">
			{#if cardBGImage}
				<img src={cardBGImage} alt={formattedTitle} class="image" />
			{/if}
		</div>
		<div class="textContainer">
			<h2 class="title">{formattedTitle}</h2>
			<p class="description">
				{cardDescription}
			</p>
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
	}
	.imageContainer {
		width: 100%;
		height: 60%;
		overflow: hidden;
		border-bottom: 2px solid var(--card-title-colour);
	}
	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.textContainer {
		display: flex;
		flex-direction: column;
		height: 40%;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 0 1rem;
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		width: 100%;
		text-decoration: none;
		border: 2px solid var(--card-title-colour);
		padding-bottom: 1rem;
	}
	.card:hover .image {
		transition: transform 0.3s;
		cursor: pointer;
		transform: scale(105%);
	}
	.title {
		text-transform: capitalize;
		font-size: 2.2rem;
		color: var(--card-title-colour);
	}
	.description {
		font-size: 1.2rem;
		color: var(--card-description-colour);
		overflow-y: scroll;
		word-break: keep-all;
	}
</style>
