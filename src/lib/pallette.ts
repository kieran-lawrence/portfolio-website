type ColourTypes = {
	textColour: string;
	backgroundColour: string;
	backgroundColourAlt: string;
	backgroundGradientFrom: string;
	backgroundGradientTo: string;
	cloudsOneColour: string;
	cloudsTwoColour: string;
	cloudsThreeColour: string;
	grassOneColour: string;
	grassTwoColour: string;
	grassThreeColour: string;
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
		textColour: '#F1F1F1',
		backgroundColour: '#6D84C8',
		backgroundColourAlt: '#16003454',
		backgroundGradientFrom: '#26254F',
		backgroundGradientTo: '#646CB4',
		cloudsOneColour: '#6D84C8',
		cloudsTwoColour: '#7B94D4',
		cloudsThreeColour: '#9EB6E6',
		grassOneColour: '#36477C',
		grassTwoColour: '#2D3953',
		grassThreeColour: '#2C3458',
		...sharedColors
	},
	light: {
		textColour: '#F1F1F1',
		backgroundColour: '#6BA6E6',
		backgroundColourAlt: '#16003454',
		backgroundGradientFrom: '#458CD8',
		backgroundGradientTo: '#9AADFF',
		cloudsOneColour: '#6BA6E6',
		cloudsTwoColour: '#84BEF5',
		cloudsThreeColour: '#A0D0F5',
		grassOneColour: '#AFEBD2',
		grassTwoColour: '#367C56',
		grassThreeColour: '#467340',
		...sharedColors
	}
};

export default theme;
