import { vars } from '$lib/style/app.css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const tooltipClass = style([
  {
    position: 'relative',
  },
]);

export const popupClass = style([
  {
    visibility: 'hidden',
    position: 'absolute',

    left: 'half',
    transform: 'translateX(-50%)',

    backgroundColor: vars.color.secondary,

    whiteSpace: 'nowrap',
  },
  sprinkles({ top: '-medium', padding: 'little' }),
  {
    selectors: {
      [`${tooltipClass}:hover &`]: {
        visibility: 'visible',
      },
    },
  },
]);
