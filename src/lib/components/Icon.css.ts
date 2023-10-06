import { recipe } from '@vanilla-extract/recipes';

export const icon = recipe({
	variants: {
		size: {
			medium: {
				fontSize: '1rem'
			},
			large: {
				fontSize: '2rem'
			}
		}
	}
});
