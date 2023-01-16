import { flex } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const skillList = style([
  flex,
  {
    flexWrap: 'wrap',
    maxWidth: '50%',
    margin: 'auto',
    justifyContent: 'center',
  },
]);
