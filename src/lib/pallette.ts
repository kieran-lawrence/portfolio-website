type ColourTypes = {
	textColour: string;
	backgroundColour: string;
};

const sharedColors = {
	reactIconColour: '#75c2d9',
	awsIconColour: '#f19e39',
	tsIconColour: '#4272ba'
};

type SharedColors = typeof sharedColors;

export type Pallette = ColourTypes & SharedColors;

type Themes = {
	light: Pallette;
	dark: Pallette;
};

const theme: Themes = {
	dark: {
		textColour: '#f1f1f1',
		backgroundColour: '#222',
		...sharedColors
	},
	light: {
		textColour: '#4D5151',
		backgroundColour: '#f1f1f1',
		...sharedColors
	}
};

export default theme;
