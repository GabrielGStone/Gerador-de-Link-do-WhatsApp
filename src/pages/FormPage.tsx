import { useEffect, useRef } from 'react';
import { wppIconGreen } from '../assets';
import type { FormData } from '../types';
import { Form } from '../components/Form';
import {
  FormAlert,
  FormPageBody,
  FormPageIcon,
  PageCard,
  PageCardInner,
  PageSubtitle,
  PageTitle,
} from '../styles/pageLayout';

type FormPageProps = {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
  onClearSubmitError: () => void;
};

export const FormPage = ({ onSubmit, isSubmitting, submitError, onClearSubmitError }: FormPageProps) => {
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitError !== null && submitError.length > 0) {
      alertRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      alertRef.current?.focus();
    }
  }, [submitError]);

  return (
    <section id="gerador-formulario" aria-labelledby="gerador-formulario-titulo">
      <PageCard>
        <PageCardInner>
          <FormPageBody>
            <PageTitle id="gerador-formulario-titulo" as="h2">
              Gerador de Link para WhatsApp
            </PageTitle>
            <PageSubtitle>
              Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais!
            </PageSubtitle>
            {submitError !== null && submitError.length > 0 ? (
              <FormAlert ref={alertRef} role="alert" tabIndex={-1}>
                {submitError}
              </FormAlert>
            ) : null}
            <Form onSubmit={onSubmit} isSubmitting={isSubmitting} onClearServerError={onClearSubmitError} />
          </FormPageBody>
          <FormPageIcon
            src={wppIconGreen}
            alt=""
            width={344}
            height={373}
            decoding="async"
            aria-hidden
          />
        </PageCardInner>
      </PageCard>
    </section>
  );
};
