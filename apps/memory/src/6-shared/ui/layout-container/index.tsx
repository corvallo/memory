import { PropsWithChildren } from 'react';

const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] h-full">
      {children}
    </div>
  );
};
export default LayoutContainer;
