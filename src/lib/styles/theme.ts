import type { SemanticTokens } from '@pandacss/dev';

type Theme = {
	semanticTokens: SemanticTokens;
};

class ThemeBuilder {
	private colors: Record<string, { value: { base: string; _dark: string } }> = {};

	addColor(name: string, [light, dark]: [string, string]) {
		this.colors[name] = {
			value: {
				base: light,
				_dark: dark
			}
		};
		return this;
	}

	public get value(): Theme {
		return { semanticTokens: { colors: this.colors } };
	}
}

const theme = new ThemeBuilder();
theme
	.addColor('text', ['#000000', '#ffffff'])
	.addColor('background', ['#ffffff', '#121212'])
	.addColor('main', ['#2196f3', '#2196f3']);

export default theme.value;
