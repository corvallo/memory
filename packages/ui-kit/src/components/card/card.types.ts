import { VariantProps } from 'tailwind-variants';
import { card } from './card.style';

export type CardVarians = VariantProps<typeof card>;

export type CardProps = CardVarians & {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};
