import theme from './theme.json';

const { schemes: { dark: primitive }, palettes } = theme;

const camelToKebab = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const hex = (hex: string) => {
  hex = hex.toLowerCase();
  if (hex.length === 7 && hex[1] === hex[2] && hex[3] === hex[4] && hex[5] === hex[6]) {
    return `#${hex[1]}${hex[3]}${hex[5]}`;
  }
  return hex;
};

const style = `
:root {
  ${Object.entries(primitive)
    .map(([key, value]) => `--${camelToKebab(key)}: ${hex(value)};`)
    .join('\n  ')}
  ${Object.entries(palettes).flatMap(([name, values]) =>
    Object.entries(values)
      .map(([key, value]) => `--${camelToKebab(name)}-${camelToKebab(key)}: ${hex(value)};`),
  ).join('\n  ')}
}
`.trimStart();

declare global {
  const process: { stdout: { write: (str: string) => void } };
}

// eslint-disable-next-line node/prefer-global/process
process.stdout.write(style);
