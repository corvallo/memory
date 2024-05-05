import { useEffect, useRef } from 'react';

export const useCardDispenser = () => {
  const cardDispenserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardDispenserRef.current) {
      const { x, y, height, width } =
        cardDispenserRef.current.getBoundingClientRect();

      const targetX = x + width / 2;
      const targetY = y + height / 2;
      const boxRef = cardDispenserRef.current.querySelectorAll('.card');

      boxRef.forEach((item: Element, index: number) => {
        const {
          x: childX,
          y: childY,
          height: childHeight,
          width: childWidth,
        } = item.getBoundingClientRect();

        const distanceX = childX + childWidth / 2;
        const distanceY = childY + childHeight / 2;
        setTimeout(() => {
          item
            .animate(
              {
                opacity: [0.5, 0.5, 1, 1],
                transform: [
                  // "translate(0px)",
                  //`translate(${targetX - distanceX}px,${targetY - distanceY}px)`,

                  `translate(${targetX - distanceX}px,${
                    targetY - distanceY
                  }px)`,
                  'translate(0px)',
                ],
                easing: ['cubic-bezier(0.68,-.55,.265,1.55)'],
                offset: [0, 0.3, 0.7, 1],
              },
              // timing options
              {
                delay: (index * 700) / 16,
                duration: 1900,
                fill: 'forwards',
              }
            )
            .finished.then(() => item.classList.add('opacity-100'));
        }, 100);
      });
    }
  }, []);
  return { ref: cardDispenserRef };
};
