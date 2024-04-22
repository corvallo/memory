'use client';
import { useBoardStore } from '~/memory/shared/providers/board-provider';

const BoardContainer: React.FC = () => {
  const boardElements = useBoardStore((s) => s.boardElements);
  return (
    <div className="p-8 bg-amber-300 h-[100dvh]">
      <div className="grid grid-cols-4  gap-4 h-full ">
        {boardElements.map((v, i) => (
          <div
            key={i}
            className="p-4 bg-cyan-400 rounded-md flex items-center justify-center"
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BoardContainer;
