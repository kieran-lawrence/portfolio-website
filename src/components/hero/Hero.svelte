<script>
	import { writable } from 'svelte/store';
	import BackgroundTop from '../BackgroundTop.svelte';
	import { activeTheme } from '$lib';

	const randomValue = writable(Math.random() * 10);
</script>

<div id="hero">
	<BackgroundTop />
	<h1
		style={`--random-x: ${$randomValue}px; --random-y: ${$randomValue * 1.5}px;--text-shadow-colour:${$activeTheme.pallette.textShadowColour}`}
	>
		Hi, I'm Kieran.
	</h1>
	<h2>
		an Australian-based software developer driven by a passion for creating cool and meaningful
		technology
	</h2>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	#hero {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: flex-start;
		height: 50vh;
	}
	h1,
	h2 {
		margin: 0;
		padding: 0;
		text-align: center;
		font-family: 'Coiny', system-ui;
		z-index: 2;
	}
	#hero h1 {
		font-size: 6rem;
		letter-spacing: 3px;
		text-shadow: 3px 3px 2px var(--text-shadow-colour);
		animation: cloud-drift 20s infinite linear;
		transform-origin: center;
	}
	#hero h2 {
		font-size: 1.8rem;
		font-weight: 400;
		letter-spacing: 1.5px;
		width: 45vw;
		animation: appear 1s ease-in forwards;
	}

	@keyframes cloud-drift {
		0% {
			transform: translate(var(--random-x), 0px);
		}
		10% {
			transform: translate(calc(var(--random-x) - 4px), 3px);
		}
		20% {
			transform: translate(calc(var(--random-x) - 8px), 6px);
		}
		30% {
			transform: translate(calc(var(--random-x) - 12px), 9px);
		}
		40% {
			transform: translate(calc(var(--random-x) - 16px), 12px);
		}
		50% {
			transform: translate(calc(var(--random-x) - 20px), 15px);
		}
		60% {
			transform: translate(calc(var(--random-x) - 16px), 12px);
		}
		70% {
			transform: translate(calc(var(--random-x) - 12px), 9px);
		}
		80% {
			transform: translate(calc(var(--random-x) - 8px), 6px);
		}
		90% {
			transform: translate(calc(var(--random-x) - 4px), 3px);
		}
		100% {
			transform: translate(var(--random-x), 0px);
		}
	}
	@keyframes appear {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		#hero h1 {
			font-size: 4rem;
		}
		#hero h2 {
			font-size: 1.5rem;
			width: 60vw;
			justify-self: center;
		}
	}
	/* Tablet Styling */
	@media (min-width: 681px) and (max-width: 1024px) {
		#hero h1 {
			font-size: 5rem;
		}
		#hero h2 {
			font-size: 2rem;
			width: 40vw;
			justify-self: center;
		}
	}
</style>
