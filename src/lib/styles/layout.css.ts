import { style } from '@vanilla-extract/css';
import { vars } from './themes.css';

export const layoutClass = style({
	color: vars.color.text,
	backgroundColor: vars.color.background,
	padding: 32,
	minHeight: '100dvh'
});
