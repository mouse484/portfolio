import { vars } from '$lib/style/app.css';
import { sprinkles } from '$lib/style/sprinkles.css';
import { flex, rounded } from '$lib/style/utils.css';
import { style } from '@vanilla-extract/css';

export const section = style([
  flex,
  rounded,
  sprinkles({ padding: 'small' }),
  {
    justifyContent: 'space-between',
    flexDirection: 'column',
    border: `2px solid ${vars.color.primary}`,
    maxWidth: '24rem',
    flexGrow: 1,
  },
]);

export const h4 = style([
  {
    textAlign: 'center',
  },
  sprinkles({ fontSize: '2xl' }),
]);

export const flexCenter = style([flex, { justifyContent: 'center' }]);

export const librariesClass = style([
  flexCenter,
  {
    flexWrap: 'wrap',
    gap: '0.2em',
  },
]);

export const libraryClass = style([
  rounded,
  flex,
  {
    border: `1px solid ${vars.color.secondary}`,
    padding: '0.2em',
    gap: '0.2em',
  },
]);

export const projectLinks = style([flexCenter, sprinkles({ gap: 'small' })]);
