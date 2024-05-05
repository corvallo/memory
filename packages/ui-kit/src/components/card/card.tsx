import { card } from './card.style';
import { CardProps } from './card.types';

export const Card: React.FC<CardProps> = ({
  flip,
  frontContent = null,
  backContent = null,
}) => {
  const { base, inner, front, back } = card({ flip });
  return (
    <div className={base()}>
      <div className={inner()}>
        <div className={front()}>{frontContent}</div>
        <div className={back()}>{backContent}</div>
      </div>
    </div>
  );
};
