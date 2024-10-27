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
	.skillsHeaderContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
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
		background-color: var(--colour-feature);
		color: var(--colour-text);
		margin: 0;
		padding: 0.4rem 0.8rem;
	}
	.items {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.items p {
		background-color: var(--colour-feature);
		padding: 0.4rem 0.8rem;
		color: var(--colour-text);
		width: max-content;
		margin: 0;
	}
</style>
