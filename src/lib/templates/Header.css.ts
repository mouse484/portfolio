import { style } from '@vanilla-extract/css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { flex } from '$lib/style/utils.css';

export const container = style([
  flex,
  {
    alignItems: 'center',
    borderBottom: ['1px', 'solid'],
    justifyContent: 'space-between',

    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'inherit',
  },
  sprinkles({
    paddingX: 'little',
  }),
]);

export const h1 = style([
  { fontWeight: 'normal' },
  sprinkles({
    fontSize: '2xl',
  }),
]);

export const items = style([flex, sprinkles({ fontSize: 'xl' })]);
