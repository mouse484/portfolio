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
    fontSize: { base: '1rem', xl: '1.2rem', '2xl': '1.7rem' },
  },
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
  },
});

export const sprinkles = createSprinkles(main);
