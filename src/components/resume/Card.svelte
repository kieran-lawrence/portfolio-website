<script lang="ts">
	import type { Snippet } from 'svelte';

	interface CardProps {
		jobTitle: string;
		jobCompany: string;
		jobDates: string;
		cardTitleColour: string;
		backgroundColour: string;
		shadowColour: string;
		children: Snippet;
	}
	const {
		jobTitle = 'Title',
		jobCompany = 'Company',
		jobDates = 'Aug 2024 - Present',
		cardTitleColour = '#f1f1f1',
		backgroundColour = '#333',
		shadowColour = 'crimson',
		children
	}: CardProps = $props();
</script>

<div
	class="cardContainer"
	style={`--card-title-colour: ${cardTitleColour};--bg-colour:${backgroundColour};--shadow-colour:${shadowColour}`}
>
	<div class="card">
		<h3 class="jobTitle">{jobTitle}</h3>
		<div class="companyDateWrapper">
			<h4>{jobCompany}</h4>
			<p>•</p>
			<h4>{jobDates}</h4>
		</div>
		{@render children?.()}
	</div>
</div>

<style>
	* {
		font-family: 'Andale Mono', monospace;
		margin: 0;
	}
	h3,
	h4 {
		padding: 0 2rem;
	}
	/* Desktop Styling */
	.cardContainer {
		width: 100%;
		height: 100%;
		border: 2px solid var(--card-title-colour);
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: center;
		height: 100%;
	}
	.jobTitle {
		font-size: 1.4rem;
		color: var(--card-title-colour);
		padding: 1rem 0 0.2rem 0;
		font-weight: 800;
	}
	.companyDateWrapper {
		display: flex;
		justify-content: space-around;
		gap: 0.5rem;
	}
	.companyDateWrapper h4 {
		padding: 0;
		width: max-content;
		font-size: 1.15rem;
		letter-spacing: -1.2px;
	}
	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		h3,
		h4 {
			padding: 0 1rem;
		}
		.jobTitle {
			font-size: 1.2rem;
		}
		.companyDateWrapper {
			flex-direction: column;
			align-items: center;
			gap: 0.1rem;
		}
		.companyDateWrapper p {
			display: none;
		}
		.companyDateWrapper h4 {
			font-size: 1rem;
		}
	}
	/* Tablet Styling */
	@media (min-width: 681px) and (max-width: 1024px) {
		.jobTitle {
			font-size: 1.3rem;
		}
		.companyDateWrapper {
			flex-direction: column;
			gap: 0.2rem;
			align-items: center;
		}
		.companyDateWrapper p {
			display: none;
		}
		.companyDateWrapper h4 {
			font-size: 1rem;
		}
	}
</style>
