import { sprinkles } from '$lib/style/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '$lib/style/app.css';

export const h = {
  1: sprinkles({ fontSize: 'x4' }),
  3: style([
    {
      fontWeight: 'normal',
      borderBottom: `4px solid ${vars.color.primary}`,
    },
    sprinkles({ padding: 'small' }),
  ]),
};
