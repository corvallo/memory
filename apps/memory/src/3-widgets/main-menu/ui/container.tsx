import { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" h-full w-full flex  justify-center items-start pt-32">
      <div className="min-h-32 bg-orange-500  py-10 px-24 border-2 border-orange-600  rounded-xl flex flex-col gap-4 shadow-inner shadow-slate-100">
        {children}
      </div>
    </div>
  );
};
export default Container;
