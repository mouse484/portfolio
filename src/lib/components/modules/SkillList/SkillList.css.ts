import { flex } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const itemsClass = style([flex, { flexDirection: 'column' }]);

export const nameAndIcon = style([flex, { justifyContent: 'space-between' }]);

export const nameClass = style({
  width: 'max-content',
  whiteSpace: 'nowrap',
});
