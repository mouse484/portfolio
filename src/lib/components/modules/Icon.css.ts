import { vars } from '$lib/style/app.css';
import { style } from '@vanilla-extract/css';

export const iconClass = style({
  fill: `var(--icon-color, ${vars.color.text})`,
});
