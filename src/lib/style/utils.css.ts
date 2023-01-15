import { style } from '@vanilla-extract/css';

export const flex = style({
  display: 'flex',
  justifyContent: 'center',
  rowGap: '1rem',
  columnGap: '0.5rem',
});

export const rounded = style({
  borderRadius: '0.25rem',
});
