<script lang="ts">
	import { onMount } from 'svelte';
	let theme: string | null = $state('');
	import { activeTheme } from '$lib';

	const handleToggleClick = () => {
		if (typeof localStorage === 'undefined' || !localStorage.getItem('theme') || !theme) {
			throw new Error('Unable to get theme info from local storage');
		}
		// Flip current theme value
		const nextTheme = $activeTheme.isDark ? 'light' : 'dark';

		// Update current theme in store
		activeTheme.setTheme(nextTheme, nextTheme.includes('dark'));

		// Update local storage based on current theme
		localStorage.setItem('theme', nextTheme);
	};

	onMount(() => {
		// Attempt to extract existing theme value from local storage
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			theme = localStorage.getItem('theme');
		}

		// Check if device has dark mode enabled
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		} else {
			theme = 'light';
		}
		// Break out if the theme object is in a bad state, i.e. empty or null
		if (!theme) {
			throw new Error('Unable to fetch users theme');
		}
		// Set initial values in local storage
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', theme);
		}
		// Update store
		activeTheme.setTheme(theme, theme.includes('dark'));
	});
</script>

<button id="themeToggle" onclick={handleToggleClick} aria-label="Toggle Theme" tabindex="0">
	<svg
		width="30px"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		style={`--moon-icon-fill: ${$activeTheme.isDark ? $activeTheme.pallette.textColour : 'transparent'}; --sun-icon-fill: ${$activeTheme.isDark ? 'transparent' : $activeTheme.pallette.textColour};`}
	>
		<title>Theme Toggle Icon</title>
		<path
			class="sun"
			fill-rule="evenodd"
			d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
		/>
		<path
			class="moon"
			fill-rule="evenodd"
			d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
		/>
	</svg>
</button>

<style>
	#themeToggle {
		border: 0;
		background: none;
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#themeToggle:hover {
		cursor: pointer;
	}
	.sun {
		fill: var(--sun-icon-fill);
	}
	.moon {
		fill: var(--moon-icon-fill);
	}
</style>
