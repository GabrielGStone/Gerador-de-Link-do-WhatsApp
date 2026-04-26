import styled, { css } from 'styled-components';
import selectChevronUrl from '../assets/select-chevron.svg';
import { colorTextPrimary } from './colors';
import { fontFamilySans, layoutMobileMediaMax } from './tokens';

const selectPlaceholderColor = '#636E7C';

export const formControlStackMaxWidth = 'min(32rem, 100%)';

export const FieldRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-self: stretch;
  width: 100%;
`;

export const FieldLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 0.8125rem;
  }
`;

const controlBase = css<{ $invalid: boolean }>`
  padding: 0.65rem 0.85rem;
  border: 1px solid ${({ $invalid }) => ($invalid ? '#ef4444' : '#d1d5db')};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  color: ${colorTextPrimary};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  @media ${layoutMobileMediaMax} {
    font-size: 0.9375rem;
  }

  &:hover:not(:disabled) {
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: #128c7e;
    box-shadow: 0 0 0 3px rgba(18, 140, 126, 0.25);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }

  &:disabled {
    background: #f9fafb;
    color: #6b7280;
    cursor: not-allowed;
  }
`;

export const StyledTextInput = styled.input<{ $invalid: boolean }>`
  ${controlBase}
`;

export const StyledTextarea = styled.textarea<{ $invalid: boolean }>`
  ${controlBase}
  resize: vertical;
  min-height: 110px;
`;

export const StyledSelect = styled.select<{ $invalid: boolean; $placeholderShown: boolean }>`
  ${controlBase}
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  background-image: url(${selectChevronUrl});
  background-repeat: no-repeat;
  background-position: right 0.85rem center;
  background-size: 9px 6px;
  padding-right: 2.25rem;
  font-family: ${fontFamilySans};
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0;
  color: ${({ $placeholderShown }) => ($placeholderShown ? selectPlaceholderColor : colorTextPrimary)};

  @media ${layoutMobileMediaMax} {
    font-size: 16px;
  }

  &:disabled {
    background: #f9fafb url(${selectChevronUrl}) no-repeat right 0.85rem center / 9px 6px;
    color: #6b7280;
    cursor: not-allowed;
  }
`;

export const FieldError = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  color: #b91c1c;
`;

export const FieldHint = styled.p`
  margin: -0.35rem 0 0;
  width: 100%;
  max-width: ${formControlStackMaxWidth};
  align-self: center;
  font-size: 0.8125rem;
  color: ${colorTextPrimary};
  line-height: 1.4;
  text-align: center;
`;

export const FormFieldRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  align-self: stretch;

  & > * {
    flex: 1 1 200px;
    min-width: 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const FormSubmitLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
  }
`;

export const ConsentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.25rem;
  width: 100%;
  max-width: 100%;
  align-self: stretch;
  text-align: center;
`;

export const ConsentText = styled.p`
  width: 100%;
  max-width: 100%;
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 0.75rem;
  }
`;

export const ConsentLink = styled.a`
  color: #075e54;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: #128c7e;
  }

  &:focus-visible {
    outline: 2px solid #128c7e;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
