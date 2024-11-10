<script>
	import { writable } from 'svelte/store';
	import BackgroundTop from '../BackgroundTop.svelte';

	const randomValue = writable(Math.random() * 10);
</script>

<div id="hero" style={`--color-sky-from: #26254F;--color-sky-to:#646CB4`}>
	<BackgroundTop />
	<h1 style={`--random-x: ${$randomValue}px; --random-y: ${$randomValue * 1.5}px;`}>
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
		display: grid;
		grid-template-rows: auto auto 2fr;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		height: 65vh;
		background: #6d84c8;
	}
	h1,
	h2 {
		margin: 0;
		padding: 0;
		text-align: center;
		font-family: 'Jersey 10', sans-serif;
	}
	#hero h1 {
		font-size: 6rem;
		letter-spacing: 3px;
		text-shadow: 0 0 17px #4b45af;
		animation: cloud-drift 20s infinite linear;
		transform-origin: center;
	}
	#hero h2 {
		font-size: 2rem;
		font-weight: 500;
		letter-spacing: 1.5px;
		width: 35vw;

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
</style>
