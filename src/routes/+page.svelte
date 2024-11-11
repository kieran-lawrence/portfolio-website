<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Hamburger from '../components/Hamburger.svelte';
	import { fly } from 'svelte/transition';
	import Hero from '../components/hero/Hero.svelte';
	import Portfolio from '../components/portfolio/Portfolio.svelte';
	import Resume from '../components/resume/Resume.svelte';

	const showMenu: Writable<boolean> = writable(false);
	const handleMenuClick = (state: boolean) => {
		showMenu.set(state);
	};

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import ThemeIcon from '../components/ThemeIcon.svelte';
	import { type PageData } from '../routes/$types';
	export let data: PageData;
	import { activeTheme } from '$lib';
</script>

<svelte:head>
	<meta property="og:title" content="Code By Kieran | Developer Portfolio Website" />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content={$activeTheme.pallette.backgroundGradientFrom} />
	<meta
		property="og:image"
		content={dev
			? 'http://localhost:3001/social-icon.png'
			: 'https://codebykieran.com/social-icon.png'}
	/>
	<meta property="og:url" content="https://codebykieran.com" />
	<meta
		property="og:description"
		content="Developer portfolio for Kieran Lawrence | Perth WA | Software Developer"
	/>
</svelte:head>

<header
	class="stickyHeader"
	style={`--text-colour: ${$activeTheme.pallette.textColour};--background-colour:${$activeTheme.pallette.backgroundColour};--text-hover-colour:${$activeTheme.pallette.backgroundColourAlt};`}
>
	<nav>
		<Hamburger
			isOpen={$showMenu}
			on:click={() => handleMenuClick(!$showMenu)}
			backgroundColour={$activeTheme.pallette.textColour}
			barColour={$activeTheme.pallette.backgroundGradientFrom}
			barHoverColour={$activeTheme.pallette.backgroundGradientTo}
		/>
		{#if $showMenu}
			<ul>
				<li transition:fly={{ y: -25 }}>
					<a href="#" on:click={() => handleMenuClick(false)}>Home</a>
				</li>
				<li transition:fly={{ delay: 100, y: -25 }}>
					<a href="#resume" on:click={() => handleMenuClick(false)}>Resume</a>
				</li>
				<li transition:fly={{ delay: 200, y: -25 }}>
					<a href="#portfolio" on:click={() => handleMenuClick(false)}>Portfolio</a>
				</li>
			</ul>
		{/if}
	</nav>
	<ThemeIcon />
</header>
<main
	style={`--text-colour: ${$activeTheme.pallette.textColour};--background-colour:${$activeTheme.pallette.backgroundColour};--text-hover-colour:${$activeTheme.isDark ? $activeTheme.pallette.backgroundColourAlt : $activeTheme.pallette.cloudsOneColour};`}
>
	<Hero />
	<Resume />
	<Portfolio portfolioData={data} />
	<Footer />
</main>

<style>
	html {
		scroll-behavior: smooth;
		overflow-x: hidden;
		overscroll-behavior: none;
	}
	* {
		margin: 0;
		color: var(--text-colour);
	}
	main {
		display: flex;
		flex-direction: column;
		gap: 5rem;
		min-height: 310vh;
		background: var(--background-colour);
	}
	.stickyHeader {
		position: sticky;
		top: 0;
		left: 0;
		padding: 1rem 1rem;
		z-index: 99;
		box-sizing: border-box;
	}
	nav {
		display: flex;
		align-items: center;
		width: fit-content;
		z-index: 100;
		gap: 1.5rem;
		font-family: 'Andale Mono', monospace;
	}
	ul {
		height: 100%;
		display: flex;
		list-style: none;
		gap: 0.5rem;
		font-size: 1.7rem;
		margin: 0;
		padding: 0;
	}
	li a {
		background: var(--text-hover-colour);
		border-radius: 1rem;
		display: block;
		padding: 0.3rem 0.6rem;
		text-decoration: none;
	}
	li a:hover {
		opacity: 0.6;
	}

	/* Mobile Styling */
	@media only screen and (max-width: 680px) {
		nav {
			align-items: flex-start;
			position: relative;
		}
		ul {
			position: absolute;
			flex-direction: column;
			top: 3.5rem;
			left: 0rem;
			padding: 0;
		}
	}
</style>
