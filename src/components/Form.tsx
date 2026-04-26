import { useCallback, useMemo, useState, type FormEvent } from 'react';
import type { FormData, FormFieldKey } from '../types';
import { CARGO_SELECT_OPTIONS } from '../constants/cargoOptions';
import { ReactComponent as ArrowRightIcon } from '../assets/arrow-right.svg';
import { rdStationPrivacyPolicyPtUrl } from '../constants/externalUrls';
import { ConsentBlock, ConsentLink, ConsentText, FormFieldRow, FormSubmitLabel, StyledForm } from '../styles/formControls';
import { isValidForm, validateForm } from '../utils/validateForm';
import { formatWhatsappBrDisplay } from '../utils/whatsappMask';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';

const initialValues: FormData = {
  whatsapp: '',
  email: '',
  cargo: '',
  mensagem: '',
};

type FormProps = {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  onClearServerError: () => void;
};

export const Form = ({ onSubmit, isSubmitting, onClearServerError }: FormProps) => {
  const [values, setValues] = useState<FormData>(initialValues);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = useMemo(() => validateForm(values), [values]);

  const setField = useCallback(
    (key: FormFieldKey) => (v: string) => {
      setValues((prev) => ({ ...prev, [key]: v }));
      onClearServerError();
    },
    [onClearServerError],
  );

  const setWhatsappMasked = useCallback(
    (v: string) => {
      setValues((prev) => ({ ...prev, whatsapp: formatWhatsappBrDisplay(v) }));
      onClearServerError();
    },
    [onClearServerError],
  );

  const fieldError = useCallback(
    (key: FormFieldKey): string | undefined => {
      if (!submitAttempted) {
        return undefined;
      }
      return errors[key];
    },
    [errors, submitAttempted],
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const nextErrors = validateForm(values);
    if (!isValidForm(nextErrors)) {
      return;
    }
    await onSubmit(values);
  };

  return (
    <StyledForm onSubmit={handleSubmit} noValidate>
      <FormFieldRow>
        <Input
          id="whatsapp"
          label="Número do WhatsApp"
          value={values.whatsapp}
          onChange={setWhatsappMasked}
          placeholder="(00) 00000-0000"
          inputMode="tel"
          required
          errorMessage={fieldError('whatsapp')}
          disabled={isSubmitting}
          autoComplete="tel"
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          inputMode="email"
          value={values.email}
          onChange={setField('email')}
          placeholder="nome@email.com"
          required
          errorMessage={fieldError('email')}
          disabled={isSubmitting}
          autoComplete="email"
        />
      </FormFieldRow>
      <Select
        id="cargo"
        label="Cargo"
        value={values.cargo}
        options={CARGO_SELECT_OPTIONS}
        onChange={setField('cargo')}
        errorMessage={fieldError('cargo')}
        disabled={isSubmitting}
        ariaRequired
      />
      <Input
        id="mensagem"
        label="Mensagem (Opcional)"
        value={values.mensagem}
        onChange={setField('mensagem')}
        placeholder="Mensagem que será pré-preenchida no link do WhatsApp."
        multiline
        rows={5}
        errorMessage={fieldError('mensagem')}
        disabled={isSubmitting}
      />
      <ConsentBlock>
        <ConsentText>Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses.</ConsentText>
        <ConsentText>
          Ao informar meus dados, eu concordo com a{' '}
          <ConsentLink href={rdStationPrivacyPolicyPtUrl} target="_blank" rel="noopener noreferrer">
            Política de privacidade
          </ConsentLink>
          .
        </ConsentText>
        <ConsentText>* Você pode alterar suas permissões de comunicação a qualquer tempo.</ConsentText>
      </ConsentBlock>
      <Button type="submit" variant="primary" loading={isSubmitting} disabled={isSubmitting}>
        <FormSubmitLabel>
          Gerar link grátis
          <ArrowRightIcon width={16} height={16} aria-hidden />
        </FormSubmitLabel>
      </Button>
    </StyledForm>
  );
};
