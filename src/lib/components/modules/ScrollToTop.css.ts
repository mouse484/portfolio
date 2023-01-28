import { vars } from '$lib/style/app.css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const circle = style([
  {
    position: 'fixed',
    zIndex: 100,
    backgroundColor: 'inherit',

    right: 0,
    bottom: 0,

    borderRadius: '50%',
    border: `1px solid ${vars.color.primary}`,

    width: 'fit-content',
    height: 'fit-content',

    display: 'flex',
    justifyContent: 'center',

    opacity: 0,
    transitionDuration: '3s',
  },
  sprinkles({
    margin: 'little',
    padding: 'little',
  }),
]);

export const visableClass = style({
  opacity: 1,
});
