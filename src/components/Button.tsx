import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import './Button.css';

type Variant = 'primary' | 'secondary';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
  );

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { href: _href, type, ...buttonProps } = props as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className'
  > & { href?: undefined };

  return (
    <button className={classes} type={type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  );
}
