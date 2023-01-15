import { flex } from '$lib/style/utils.css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const main = style([
  flex,
  { flexDirection: 'column' },
  sprinkles({ gap: 'medium' }),
]);