type ColourTypes = {
	textColour: string;
};

const sharedColors = {};

type SharedColors = typeof sharedColors;

export type Pallette = ColourTypes & SharedColors;

type Themes = {
	light: Pallette;
	dark: Pallette;
};

const theme: Themes = {
	dark: {
		textColour: '#f1f1f1',

		...sharedColors
	},
	light: {
		textColour: '#4D5151',
		...sharedColors
	}
};

export default theme;
