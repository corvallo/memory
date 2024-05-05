import generateBoard from '~/memory/shared/actions/generate-board';
import {
  SM_BOARD,
  MD_BOARD,
  LG_BOARD,
} from '~/memory/shared/constants/board-constants';
import { BoardProvider } from '~/memory/shared/providers/board-provider';
import Board from '~/memory/widgets/board';

const Game: React.FC = async () => {
  const result = await generateBoard(MD_BOARD);
  return (
    <BoardProvider boardSize={MD_BOARD} boardElements={result}>
      <Board />
    </BoardProvider>
  );
};

export default Game;
