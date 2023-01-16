import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { siSpacex } from 'simple-icons';

const space = {
  none: 0,
  little: '1rem',
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
    margin: space,
    gap: space,
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
