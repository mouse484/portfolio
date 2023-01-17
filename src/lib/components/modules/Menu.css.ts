import { vars } from '$lib/style/app.css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { buttonReset, flex, rounded } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const buttonClass = style([buttonReset]);

export const itemsClass = style([
  rounded,
  flex,
  {
    position: 'absolute',

    flexDirection: 'column',
    justifyContent: 'space-between',

    border: `2px solid ${vars.color.secondary}`,

    zIndex: 50,
    backgroundColor: 'inherit',
  },
  sprinkles({ top: 'medium', padding: 'little' }),
  {},
]);

export const itemClass = style([
  {
    textAlign: 'center',
    selectors: {
      '&+&': {
        borderTop: `1px solid ${vars.color.secondary}`,
      },
    },
  },
  sprinkles({ padding: 'little' }),
]);
