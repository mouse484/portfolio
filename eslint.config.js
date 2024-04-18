import eslintPluginAstro from 'eslint-plugin-astro';
import unocss from '@unocss/eslint-config/flat';

export default [...eslintPluginAstro.configs['flat/all'], unocss];
