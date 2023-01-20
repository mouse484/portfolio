import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

export const strictEntries = <T extends Record<string, any>>(
  object: T
): [keyof T, T[keyof T]][] => {
  return Object.entries(object);
};

const spaceBase = {
  none: 0,
  little: '1rem',
  small: '2rem',
  medium: '4rem',
  large: '8rem',
};

const space = {
  ...spaceBase,
  ...Object.fromEntries(
    strictEntries(spaceBase).map(([key, value]) => [`-${key}`, `-${value}`])
  ),
} as typeof spaceBase & {
  [P in keyof typeof spaceBase as `-${P}`]: (typeof spaceBase)[P];
};

const main = defineProperties({
  properties: {
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    margin: space,
    gap: space,
    top: space,
    fontSize: {
      xs: '0.7rem',
      base: '1rem',
      xl: '1.2rem',
      '2xl': '1.7rem',
      x4: '4rem',
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
  },
});

export const sprinkles = createSprinkles(main);
