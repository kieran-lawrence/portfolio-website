<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SkillsItemProps {
		headerText: string;
		colourFeature: string;
		colourText: string;
		skillItems: string[];
		children: Snippet;
	}
	const {
		headerText = 'Some Text',
		colourFeature = '#CCC',
		colourText = '#000',
		skillItems = [],
		children
	}: SkillsItemProps = $props();
</script>

<div
	class="skillsHeaderContainer"
	style={`--colour-feature: ${colourFeature};--colour-text: ${colourText};`}
>
	<div class="header">
		{@render children?.()}
		<h2>{headerText}</h2>
	</div>
	<div class="items">
		{#each skillItems as item}
			<p>{item}</p>
		{/each}
	</div>
</div>

<style>
	* {
		font-family: 'Andale Mono', monospace;
	}
	.skillsHeaderContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		height: 100%;
		border: 2px solid var(--colour-text);
		border-radius: 1rem;
		padding: 1rem;
		box-sizing: border-box;
		grid-column: 1 / span 2;
	}
	.skillsHeaderContainer:last-of-type(1) {
		background: blue;
	}
	.header {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: center;
		fill: var(--colour-feature);
	}
	h2 {
		width: max-content;
		color: var(--colour-text);
		margin: 0;
		border-radius: 1rem;
	}
	.items {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.items p {
		background-color: var(--colour-feature);
		border-radius: 1rem;
		padding: 0.4rem 0.8rem;
		color: var(--colour-text);
		width: max-content;
		margin: 0;
	}
	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		.skillsHeaderContainer {
			grid-column: 1;
			grid-row: auto;
		}
	}
</style>
