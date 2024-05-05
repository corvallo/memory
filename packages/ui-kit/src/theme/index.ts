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
  return ({ addBase, theme, addUtilities }: PluginAPI) => {
    addBase({
      html: { fontSize: '16px' },
      body: {
        height: '100dvh',
        background: `${theme('colors.neutral.700')}`,
        color: theme('colors.white'),
        fontFamily: 'Jua',
      },
    });
    addUtilities({
      '.backface-visible': {
        'backface-visibility': 'visible',
      },
      '.backface-hidden': {
        'backface-visibility': 'hidden',
      },
    });
  };
};
