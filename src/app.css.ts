import { createTheme, style } from '@vanilla-extract/css';

const color = {
  white: '#ffffff',
  dark: '#121212',
  skyBlue: '#bfdbff',
};

export const [themeClass, vars] = createTheme({
  color: {
    background: color.white,
    text: color.dark,
    primary: color.skyBlue,
  },
});

export const darkThemeClass = createTheme(vars, {
  color: {
    background: color.dark,
    text: color.white,
    primary: color.skyBlue,
  },
});

export const root = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
});
