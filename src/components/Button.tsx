import styled, { css } from 'styled-components';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { layoutMobileMediaMax } from '../styles/tokens';

type Variant = 'primary' | 'secondary' | 'ghost';

const variantCss: Record<Variant, ReturnType<typeof css>> = {
  primary: css`
    background: #003d5c;
    color: #fff;

    &:hover:not(:disabled) {
      background: #005a85;
    }
  `,
  secondary: css`
    background: #fff;
    color: #128c7e;
    border: 1px solid #128c7e;

    &:hover:not(:disabled) {
      background: #ecfdf5;
    }
  `,
  ghost: css`
    background: transparent;
    color: #128c7e;
  `,
};

const LoadingLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledButton = styled.button<{ $variant: Variant }>`
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;
  align-self: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: inherit;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.1s ease;

  @media ${layoutMobileMediaMax} {
    font-size: 0.9375rem;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  ${({ $variant }: { $variant: Variant }) => variantCss[$variant]}
`;

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  loading = false,
  type = 'button',
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled === true || loading;
  return (
    <StyledButton
      type={type}
      $variant={variant}
      className={className}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {loading ? <LoadingLabel>Enviando…</LoadingLabel> : children}
    </StyledButton>
  );
};
