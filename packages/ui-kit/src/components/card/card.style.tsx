import { tv } from 'tailwind-variants';
export const card = tv({
  slots: {
    base: ` h-full w-full perspective-1000`,
    inner: `
      relative h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-style-3d 
      `,

    front: `absolute inset-0 rounded-xl bg-blue-400`,
    back: `absolute inset-0 h-full w-full rounded-xl bg-purple-500/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]`,
  },
  variants: {
    flip: {
      true: {
        inner: `transform rotate-y-180`,
      },
    },
  },
});
