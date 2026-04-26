import { memo, useId, type ChangeEvent } from 'react';
import type { SelectOption } from '../types';
import { FieldError, FieldLabel, FieldRoot, StyledSelect } from '../styles/formControls';

type SelectProps = {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  /** Mostra * no rótulo e `required` nativo no `<select>`. */
  required?: boolean;
  /** Obrigatório para leitores de tela sem asterisco (ex.: cargo). */
  ariaRequired?: boolean;
  errorMessage?: string;
  disabled?: boolean;
};

const SelectComponent = ({
  id,
  label,
  value,
  options,
  onChange,
  required = false,
  ariaRequired,
  errorMessage,
  disabled = false,
}: SelectProps) => {
  const generatedId = useId();
  const errorId = errorMessage !== undefined && errorMessage.length > 0 ? `${id}-error-${generatedId}` : undefined;
  const invalid = errorMessage !== undefined && errorMessage.length > 0;
  const ariaRequiredMerged = ariaRequired !== undefined ? ariaRequired : required;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <FieldRoot>
      <FieldLabel htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </FieldLabel>
      <StyledSelect
        id={id}
        $invalid={invalid}
        $placeholderShown={value === ''}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        aria-required={ariaRequiredMerged}
        aria-invalid={invalid}
        aria-describedby={errorId}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled === true}>
            {opt.label}
          </option>
        ))}
      </StyledSelect>
      {errorId !== undefined && invalid ? <FieldError id={errorId}>{errorMessage}</FieldError> : null}
    </FieldRoot>
  );
};

export const Select = memo(SelectComponent);
