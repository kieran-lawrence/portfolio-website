'use client';

import { useEffect, useState } from 'react';
import IconSun from './icons/iconSun';
import IconMoon from './icons/iconMoon';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);
	// Set the initial theme based on the user's system preference
	useEffect(() => {
		if (document && typeof window !== 'undefined') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (systemTheme) {
				document.body.dataset.theme = 'dark';
				setIsDark(true);
			} else {
				setIsDark(false);
			}
		}
	}, []);
	// Override the theme when toggling the theme slider
	const handleToggleClick = () => {
		if (document) {
			const { dataset } = document.body;
			dataset.theme = isDark ? 'light' : 'dark';
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
