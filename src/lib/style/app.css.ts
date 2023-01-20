import { createTheme, style } from '@vanilla-extract/css';

const color = {
  white: '#ffffff',
  dark: '#121212',
  skyBlue: '#bfdbff',
  gray: '#1e293b',
};

export const [themeClass, vars] = createTheme({
  color: {
    background: color.white,
    text: color.dark,
    primary: color.skyBlue,
    secondary: color.gray,
  },
});

export const darkThemeClass = createTheme(vars, {
  color: {
    background: color.dark,
    text: color.white,
    primary: color.skyBlue,
    secondary: color.gray,
  },
});

export const root = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,

  width: '100%',
  overflow: 'clip',
});
