import { tv } from 'tailwind-variants';

export const button = tv({
  slots: {
    base: `
     bg-red-500 text-white border-2 border-neutral-800 
      rounded-md shadow-button-shadow
      active:transform active:scale-95
      flex items-center justify-center text-center
      [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]
    `,
  },
  variants: {
    variant: {
      default: {},
      rounded: { base: 'rounded-full' },
    },
    size: {
      sm: { base: 'py-2 px-4 text-sm' },
      md: { base: 'py-3 px-6 text-md' },
      lg: { base: 'py-4 px-8 text-lg' },
    },
    color: {
      neutral: { base: 'bg-neutral-500 hover:bg-neutral-600' },
      red: { base: 'bg-red-500 hover:bg-red-600' },
      orange: { base: 'bg-orange-500 hover:bg-orange-600' },
      amber: { base: 'bg-amber-500 hover:bg-amber-600' },
      yellow: { base: 'bg-yellow-500 hover:bg-yellow-600' },
      lime: { base: 'bg-lime-500 hover:bg-lime-600' },
      green: { base: 'bg-green-500 hover:bg-green-600' },
      emerald: { base: 'bg-emerald-500 hover:bg-emerald-600' },
      teal: { base: 'bg-teal-500 hover:bg-teal-600' },
      cyan: { base: 'bg-cyan-500 hover:bg-cyan-600' },
      sky: { base: 'bg-sky-500 hover:bg-sky-600' },
      blue: { base: 'bg-blue-500 hover:bg-blue-600' },
      indigo: { base: 'bg-indigo-500 hover:bg-indigo-600' },
      violet: { base: 'bg-violet-500 hover:bg-violet-600' },
      purple: { base: 'bg-purple-500 hover:bg-purple-600' },
      fuchsia: { base: 'bg-fuchsia-500 hover:bg-fuchsia-600' },
      pink: { base: 'bg-pink-500 hover:bg-pink-600' },
      rose: { base: 'bg-rose-500 hover:bg-rose-600' },
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'md',
  },
});
