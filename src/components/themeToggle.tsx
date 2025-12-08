'use client';

import { useEffect, useState } from 'react';
import IconSun from './icons/iconSun';
import IconMoon from './icons/iconMoon';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') === 'dark';
		}
		return false;
	});
	// Set the initial theme based on the user's system preference
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedTheme = localStorage.getItem('theme');
			if (storedTheme) {
				document.body.dataset.theme = storedTheme;
				setIsDark(storedTheme === 'dark');
			} else {
				const systemDarkModeEnabled = window.matchMedia(
					'(prefers-color-scheme: dark)',
				).matches;
				const theme = systemDarkModeEnabled ? 'dark' : 'light';
				document.body.dataset.theme = theme;
				setIsDark(systemDarkModeEnabled);
				localStorage.setItem('theme', theme);
			}
		}
	}, []);
	// Override the theme when toggling the theme slider
	const handleToggleClick = () => {
		if (typeof window !== 'undefined') {
			const { dataset } = document.body;
			const newTheme = isDark ? 'light' : 'dark';
			dataset.theme = newTheme;
			setIsDark((prev) => !prev);
			localStorage.setItem('theme', newTheme);
		}
	};

	return (
		<label className="relative inline-block h-9 w-[4.5rem]" aria-label="Toggle Theme">
			<input
				type="checkbox"
				className="themeToggleInput"
				onChange={handleToggleClick}
				checked={!isDark}
			/>
			<span className="themeToggleSlider">
				<IconSun />
				<IconMoon />
			</span>
		</label>
	);
}
