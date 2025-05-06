'use client';

import { useEffect } from 'react';
import IconSun from './icons/iconSun';
import IconMoon from './icons/iconMoon';

export default function ThemeToggle() {
	// Set the initial theme based on the user's system preference
	useEffect(() => {
		if (document && typeof window !== 'undefined') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (systemTheme) {
				document.body.dataset.theme = 'dark';
			}
		}
	}, []);
	// Override the theme when toggling the theme slider
	const handleToggleClick = () => {
		if (document) {
			const { dataset } = document.body;
			dataset.theme = dataset.theme === 'dark' ? 'light' : 'dark';
		}
	};

	return (
		<label className="relative inline-block h-9 w-[4.5rem]" aria-label="Toggle Theme">
			<input type="checkbox" className="themeToggleInput" onChange={handleToggleClick} />
			<span className="themeToggleSlider">
				<IconSun />
				<IconMoon />
			</span>
		</label>
	);
}
