import { sprinkles } from '$lib/style/sprinkles.css';
import { flex } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const projects = style([
  flex,
  { justifyContent: 'center' },
  sprinkles({ gap: 'small' }),
]);
