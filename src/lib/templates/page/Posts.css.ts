import { sprinkles } from '$lib/style/sprinkles.css';
import { flex } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const posts = style({
  margin: 'auto',
  maxWidth: '24rem',
});

export const dateClass = sprinkles({
  fontSize: 'xs',
});

export const description = style([
  flex,
  {
    justifyContent: 'start',
  },
]);

export const descriptionItem = style({
  flex: '0 1 auto',
  minWidth: 0,
});

export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ':hover': {
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
  },
});
