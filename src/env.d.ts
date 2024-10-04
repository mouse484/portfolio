// eslint-disable-next-line ts/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />

import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes {}
  }
}
