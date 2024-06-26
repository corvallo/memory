import { theme } from './../../packages/ui-kit/src/theme/index';
import { join } from 'path';
import type { Config } from 'tailwindcss';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';

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
  plugins: [],
} satisfies Config;
