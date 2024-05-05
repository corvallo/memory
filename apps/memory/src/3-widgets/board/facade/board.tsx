'use client';
import CardButton from '~/memory/features/card-button';
import {
  LG_BOARD,
  MD_BOARD,
  SM_BOARD,
} from '~/memory/shared/constants/board-constants';
import { useBoardStore } from '~/memory/shared/providers/board-provider';
import BoardContainer from '../ui/board-container';
import { useCardDispenser } from '../hooks/use-card-dispenser';

const Board: React.FC = () => {
  const boardElements = useBoardStore((s) => s.boardElements);
  const { ref } = useCardDispenser();
  const gridClass = useBoardStore((s) => {
    if (s.boardSize === SM_BOARD) {
      return 'grid-cols-4 grid-flow-row auto-rows-fr';
    }
    if (s.boardSize === MD_BOARD) {
      return 'grid-cols-6 grid-flow-row auto-rows-fr';
    }
    if (s.boardSize === LG_BOARD) {
      return 'grid-cols-8 grid-flow-row auto-rows-fr';
    }
  });

  return (
    <BoardContainer>
      <div className={`grid ${gridClass} gap-3  w-full h-full`} ref={ref}>
        {boardElements?.map((value, index) => (
          <CardButton key={`${value}_${index}`} index={index} value={value} />
        ))}
      </div>
    </BoardContainer>
  );
};
export default Board;
