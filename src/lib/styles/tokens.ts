import { defineSemanticTokens, type SemanticTokens } from '@pandacss/dev';

class Tokens {
	colors = new Map<string, [string, string?]>();
	private generateColor() {
		const colorList = [...this.colors.entries()].map(([name, [base, dark]]) => [
			name,
			{ value: { base, _dark: dark } }
		]);
		return Object.fromEntries(colorList);
	}
	generate(): SemanticTokens {
		return defineSemanticTokens({
			colors: this.generateColor()
		});
	}
}

const tokens = new Tokens();

tokens.colors.set('text', ['#000000', '#ffffff']);
tokens.colors.set('background', ['#ffffff', '#121212']);
tokens.colors.set('main', ['#2196f3']);

const generated = tokens.generate();

export { generated as tokens };
