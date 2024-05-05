'use client';
import { useBoardStore } from '~/memory/shared/providers/board-provider';
import { Card } from '@ui-kit';
import { useState } from 'react';

const CardButton: React.FC<{ index: number; value: number }> = ({
  index,
  value,
}) => {
  const onCardClick = useBoardStore((s) => s.onCardClick);
  const [flip, setFlip] = useState(false);
  return (
    <button
      className=" h-full card opacity-0 rounded-md"
      onClick={() => {
        onCardClick({ index, value });
        setFlip(!flip);
      }}
    >
      <Card flip={flip} frontContent={null} backContent={value} />
    </button>
  );
};

export default CardButton;
