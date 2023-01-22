import { vars } from '$lib/style/app.css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const dropdown = style({
  position: 'relative',
});

export const item = style([
  {
    position: 'absolute',
    visibility: 'hidden',
    zIndex: 50,
    backgroundColor: vars.color.background,
  },
  sprinkles({ padding: 'little' }),
  {
    selectors: {
      [`${dropdown}:hover > &`]: {
        visibility: 'visible',
      },
    },
  },
]);

export const right = style({ top: '-1em', left: '100%' });

export const aliginRight = style({ right: '-2rem' });
