import { PropsWithChildren } from 'react';

const BoardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="board-container" className="overflow-hidden w-full h-[90dvh] p-10">
      {children}
    </div>
  );
};
export default BoardContainer;
