import { createTheme, style } from '@vanilla-extract/css';

const color = {
  white: '#ffffff',
  dark: '#121212',
};

export const [themeClass, vars] = createTheme({
  color: {
    background: color.white,
    text: color.dark,
  },
});

export const darkThemeClass = createTheme(vars, {
  color: {
    background: color.dark,
    text: color.white,
  },
});

export const root = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
});
