import { card } from './card.style';
import { CardProps } from './card.types';

export const Card: React.FC<CardProps> = ({
  flip,
  frontContent = null,
  backContent = null,
}) => {
  const { base, inner, content, front, back } = card();
  return (
    <div className="group h-full w-full min-h-28 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-active:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-xl bg-blue-400">
          {frontContent}
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-purple-500/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backContent}
        </div>
      </div>
    </div>
  );
};
