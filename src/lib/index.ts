import { writable } from 'svelte/store';
import theme from '$lib/pallette';

const newLoading = () => {
	const { subscribe, update } = writable({
		isLoading: true
	});

	function setLoading(isLoading: boolean) {
		update(() => {
			return {
				isLoading
			};
		});
	}

	return { subscribe, setLoading };
};

const newTheme = () => {
	const { subscribe, update } = writable({
		theme: 'dark',
		pallette: theme.dark,
		isDark: true
	});

	function setTheme(themeType: string, isDark: boolean) {
		update(() => {
			return {
				theme: themeType,
				pallette: isDark ? theme.dark : theme.light,
				isDark
			};
		});
	}

	return { subscribe, setTheme };
};

export const activeTheme = newTheme();
export const loading = newLoading();
