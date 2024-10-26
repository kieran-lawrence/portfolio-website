<script>
	export let isOpen;
	export let backgroundColour = '#CCC';
	export let barColour = '#000';
	export let barHoverColour = '#CC0000';
	$: vars = `--background: ${backgroundColour};--bar-colour: ${barColour};--bar-hover-colour: ${barHoverColour};`;

	const timingFunction = `cubic-bezier(0.2, 0, 0.4, 1)`;
	$: lineTransition = isOpen
		? `top 250ms 50ms ${timingFunction}, transform 250ms 350ms ${timingFunction}`
		: `top 250ms 350ms ${timingFunction}, transform 250ms 50ms ${timingFunction}`;
</script>

<button class="navMenu" class:isOpen on:click style={vars} aria-label="Menu">
	<span
		class="bar top"
		style="transition: {lineTransition}; {isOpen ? 'transform: rotate(45deg)' : ''}"
	/>
	<span
		class="bar centre"
		style="transition: {lineTransition}; {isOpen ? 'transform: rotate(45deg)' : ''}"
	/>
	<span
		class="bar bottom"
		style="transition: {lineTransition}; {isOpen ? 'transform: rotate(-45deg)' : ''}"
	/>
</button>

<style>
	.navMenu {
		position: relative;
		cursor: pointer;
		height: 3rem;
		width: 3rem;
		border: none;
		border-radius: 50%;
		padding: 0;
		background-color: var(--background);
		display: block;
	}
	.bar {
		position: absolute;
		background: var(--bar-colour);
		width: 60%;
		height: 0.2rem;
		border-radius: 0.1rem;
		left: 20%;
	}
	.navMenu:hover .bar {
		background: var(--bar-hover-colour);
	}
	.top {
		top: 25%;
	}
	.centre {
		top: 50%;
	}
	.bottom {
		top: 75%;
	}
	.isOpen .bar {
		top: 50%;
	}
</style>
