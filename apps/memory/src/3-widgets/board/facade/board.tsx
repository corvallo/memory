'use client';
import { BoardProvider } from '~/memory/shared/providers/board-provider';
import BoardContainer from '../ui/board-container';
import { useState } from 'react';
import generateBoard from '~/memory/shared/actions/generate-board';

const Board: React.FC = () => {
  const [elements, setElements] = useState<number[]>([]);
  return (
    <BoardProvider boardSize={128}>
      {/* <BoardContainer /> */}
      <button
        onClick={async () => {
          const res = await generateBoard(8);
          setElements(res);
        }}
      >
        OK
      </button>
      {elements.map((v) => {
        return <div key={v}>{v}</div>;
      })}
    </BoardProvider>
  );
};
export default Board;
