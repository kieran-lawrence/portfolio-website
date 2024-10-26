<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Hamburger from '../components/Hamburger.svelte';
	import { fly } from 'svelte/transition';
	import Hero from '../components/hero/Hero.svelte';
	import Portfolio from '../components/portfolio/Portfolio.svelte';
	import Skills from '../components/skills/Skills.svelte';
	import Resume from '../components/resume/Resume.svelte';

	const showMenu: Writable<boolean> = writable(false);
	const handleMenuClick = (state: boolean) => {
		showMenu.set(state);
	};
</script>

<main>
	<nav>
		<Hamburger isOpen={$showMenu} on:click={() => handleMenuClick(!$showMenu)} />
		{#if $showMenu}
			<ul>
				<li transition:fly={{ y: -25 }}>
					<a href="#" on:click={() => handleMenuClick(false)}>Home</a>
				</li>
				<li transition:fly={{ delay: 100, y: -25 }}>
					<a href="#portfolio" on:click={() => handleMenuClick(false)}>Portfolio</a>
				</li>
				<li transition:fly={{ delay: 200, y: -25 }}>
					<a href="#skills" on:click={() => handleMenuClick(false)}>Skills</a>
				</li>
				<li transition:fly={{ delay: 300, y: -25 }}>
					<a href="#resume" on:click={() => handleMenuClick(false)}>Resume</a>
				</li>
			</ul>
		{/if}
	</nav>
	<Hero />
	<Portfolio />
	<Skills />
	<Resume />
</main>

<style>
	* {
		margin: 0;
		color: #f1f1f1;
	}
	main {
		display: flex;
		flex-direction: column;
		min-height: 400vh;
		background-color: #111;
	}
	nav {
		position: sticky;
		top: 0;
		left: 0;
		padding: 1rem 1rem;
		display: flex;
		align-items: center;
		width: fit-content;
		z-index: 100;
	}
	ul {
		height: 100%;
		display: flex;
		list-style: none;
		gap: 1.5rem;
		font-size: 1.2rem;
		margin: 0;
	}
	li a {
		text-decoration: none;
		color: var(--text-colour);
	}
	li a:hover {
		color: var(--text-hover);
	}
</style>
