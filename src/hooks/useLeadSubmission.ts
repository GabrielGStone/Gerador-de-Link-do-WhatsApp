import { useCallback, useState } from 'react';
import type { FormData, ResultData } from '../types';
import { generateLink, normalizeMensagemForWhatsappPrefill } from '../utils/generateLink';
import { getZapierErrorMessage, sendToZapier } from '../services/zapierService';

/**
 * Gera o link, envia ao Zapier e expõe estados de envio/erro para o formulário.
 */
export const useLeadSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const clearSubmitError = useCallback(() => {
    setSubmitError(null);
  }, []);

  const submit = useCallback(async (data: FormData): Promise<ResultData | null> => {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const link = generateLink(data);
      const mensagem = normalizeMensagemForWhatsappPrefill(data.mensagem);
      const payload: ResultData = {
        email: data.email.trim(),
        whatsapp: data.whatsapp.trim(),
        mensagem,
        cargo: data.cargo,
        link,
      };
      await sendToZapier(payload);
      return payload;
    } catch (error) {
      setSubmitError(getZapierErrorMessage(error));
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { submit, isSubmitting, submitError, clearSubmitError };
};
