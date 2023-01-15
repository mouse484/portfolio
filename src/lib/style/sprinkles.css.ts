import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '2rem',
  medium: '4rem',
  large: '8rem',
};

const main = defineProperties({
  properties: {
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space,
    fontSize: { base: '1rem', xl: '1.2rem', '2xl': '1.7rem', x4: '4rem' },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
  },
});

export const sprinkles = createSprinkles(main);
