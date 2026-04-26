import { memo, useId, type ChangeEvent } from 'react';
import {
  FieldError,
  FieldLabel,
  FieldRoot,
  StyledTextarea,
  StyledTextInput,
} from '../styles/formControls';

type InputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type?: 'text' | 'email' | 'tel' | 'url';
  inputMode?: 'text' | 'tel' | 'numeric' | 'email';
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  autoComplete?: string;
};

const InputComponent = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 4,
  type = 'text',
  inputMode = 'text',
  required = false,
  errorMessage,
  disabled = false,
  autoComplete,
}: InputProps) => {
  const generatedId = useId();
  const errorId = errorMessage !== undefined && errorMessage.length > 0 ? `${id}-error-${generatedId}` : undefined;
  const invalid = errorMessage !== undefined && errorMessage.length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <FieldRoot>
      <FieldLabel htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </FieldLabel>
      {multiline ? (
        <StyledTextarea
          id={id}
          $invalid={invalid}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          disabled={disabled}
          aria-invalid={invalid}
          aria-describedby={errorId}
        />
      ) : (
        <StyledTextInput
          id={id}
          $invalid={invalid}
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          aria-invalid={invalid}
          aria-describedby={errorId}
        />
      )}
      {errorId !== undefined && invalid ? <FieldError id={errorId}>{errorMessage}</FieldError> : null}
    </FieldRoot>
  );
};

export const Input = memo(InputComponent);
