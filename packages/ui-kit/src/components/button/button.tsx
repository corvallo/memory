import { type ElementType, forwardRef } from 'react';
import { button } from './button.style';
import type { ButtonComponent, ButtonProps } from './button.types';
import type { PolymorphicRef } from '../../types/polymorphic';
import { twMerge } from 'tailwind-merge';

export const Button: ButtonComponent = forwardRef(
  <C extends ElementType = 'button'>(
    props: ButtonProps<C>,
    fwrdRef?: PolymorphicRef<C>
  ) => {
    const { children, variant, color, size, className, ...rest } = props;

    const Component = props.as || 'button';
    const { base } = button({ variant, color, size });

    return (
      <Component
        className={twMerge(base(), className ?? '')}
        ref={fwrdRef}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
