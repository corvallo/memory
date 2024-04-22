import { type VariantProps } from 'tailwind-variants';
import { button } from './button.style';
import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import { PolymorphicComponentPropWithRef } from '../../types/polymorphic';

export type ButtonVariants = VariantProps<typeof button>;
export type Props = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    icon?: string;
  };

export type ButtonProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<C, Props>;
export type ButtonComponent = <C extends ElementType>(
  props: ButtonProps<C>
) => ReactNode | null;
