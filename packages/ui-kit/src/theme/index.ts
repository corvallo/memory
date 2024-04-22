import type { Config } from 'tailwindcss';
import { colors } from './vars/colors';
import { fontFamily } from './vars/fonts';
import { animation } from './vars/animations';
import { boxShadow } from './vars/box-shadow';
import { screens } from './vars/screens';
import { keyframes } from './vars/keyframes';
import { borderRadius } from './vars/border-radius';

export const theme: Config['theme'] = {
  colors,
  fontFamily,
  animation,
  boxShadow,
  borderRadius,
  screens,
  keyframes,
};
