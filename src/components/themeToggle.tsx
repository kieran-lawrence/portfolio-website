'use client';

import { useEffect, useState } from 'react';
import IconSun from './icons/iconSun';
import IconMoon from './icons/iconMoon';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

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

	const handleToggleClick = () => {
		if (typeof window !== 'undefined') {
			const { dataset } = document.body;
			const newTheme = isDark ? 'light' : 'dark';
			dataset.theme = newTheme;
			localStorage.setItem('theme', newTheme);
			setIsDark((prev) => !prev);
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
