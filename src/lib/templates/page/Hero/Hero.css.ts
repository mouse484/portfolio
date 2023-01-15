import { sprinkles } from '$lib/style/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from 'src/app.css';

export const section = style({
  textAlign: 'center',
});

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
