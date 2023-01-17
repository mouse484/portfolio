import { sprinkles } from '$lib/style/sprinkles.css';
import { flex } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const LoadingClass = style([
  sprinkles({ fontSize: 'x4' }),
  flex,
  { justifyContent: 'center', alignItems: 'center', height: '100vh' },
]);
