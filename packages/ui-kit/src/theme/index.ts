import type { Config } from 'tailwindcss';
import { colors } from './vars/colors';
import { fontFamily } from './vars/fonts';
import { animation } from './vars/animations';
import { boxShadow } from './vars/box-shadow';
import { screens } from './vars/screens';
import { keyframes } from './vars/keyframes';
import { borderRadius } from './vars/border-radius';
import { PluginAPI } from 'tailwindcss/types/config';

export const theme: Config['theme'] = {
  colors,
  fontFamily,
  animation,
  boxShadow,
  borderRadius,
  screens,
  keyframes,
};

export const twPlugin = () => {
  return ({ addBase, theme }: PluginAPI) => {
    addBase({
      html: { fontSize: '16px' },
      body: {
        height: '100vh',
        background: `linear-gradient(to bottom right,${theme(
          'colors.red.500'
        )},${theme('colors.red.500')},${theme('colors.orange.500')})`,
        color: theme('colors.white'),
        fontFamily: 'Jua',
      },
    });
  };
};
