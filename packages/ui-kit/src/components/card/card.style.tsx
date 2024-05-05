import { tv } from 'tailwind-variants';
export const card = tv({
  slots: {
    base: `perspective-1000 h-full w-full`,
    inner: `hover:transform hover:rotate-y-180 relative transform-style-3d w-full h-full transition-transform duration-75`,
    content: `
        backface-hidden 
        shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] 
        absolute 
        flex 
        flex-col 
        justify-center 
        w-full h-full 
        border rounded-2xl border-solid border-white`,
    front: `bg-green-600`,
    back: `bg-blue-600`,
  },
  variants: {
    flip: {
      true: {
        inner: `transform rotate-y-180`,
      },
    },
  },
});
