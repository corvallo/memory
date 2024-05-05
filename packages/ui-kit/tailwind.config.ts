import { join } from 'path';
import type { Config } from 'tailwindcss';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { theme, twPlugin } from './src/theme';

export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app,layouts}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: { ...theme },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [twPlugin(), require('@xpd/tailwind-3dtransforms')],
} satisfies Config;
