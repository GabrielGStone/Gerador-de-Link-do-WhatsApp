import type { ResultData } from '../types';
import { getCargoLabel } from '../constants/cargoOptions';
import { toWhatsappInternational } from '../utils/normalizeWhatsapp';

export class ZapierRequestError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ZapierRequestError';
    this.status = status;
  }
}

const REQUEST_TIMEOUT_MS = 30_000;

/** Webhook Catch Hook indicado nos requisitos (sobrescrito por REACT_APP_ZAPIER_WEBHOOK_URL se definido). */
export const DEFAULT_ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/';

type ZapierWebhookBody = {
  email: string;
  whatsapp: string;
  mensagem: string;
  cargo: string;
  cargoLabel: string;
  link: string;
};

const buildBody = (data: ResultData): ZapierWebhookBody => ({
  email: data.email.trim(),
  whatsapp: toWhatsappInternational(data.whatsapp),
  mensagem: data.mensagem.trim(),
  cargo: data.cargo,
  cargoLabel: getCargoLabel(data.cargo),
  link: data.link,
});

/** Corpo como x-www-form-urlencoded (requisição “simples”) + no-cors evita bloqueio CORS do Catch Hook no browser. */
const buildFormBody = (data: ResultData): string => {
  const b = buildBody(data);
  return new URLSearchParams({
    email: b.email,
    whatsapp: b.whatsapp,
    mensagem: b.mensagem,
    cargo: b.cargo,
    cargoLabel: b.cargoLabel,
    link: b.link,
  }).toString();
};

const resolveWebhookUrl = (): string => {
  const fromEnv = process.env.REACT_APP_ZAPIER_WEBHOOK_URL?.trim();
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return fromEnv;
  }
  return DEFAULT_ZAPIER_WEBHOOK_URL;
};

/** Envia os dados para o webhook do Zapier. */
export const sendToZapier = async (data: ResultData): Promise<void> => {
  const url = resolveWebhookUrl();

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: buildFormBody(data),
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof ZapierRequestError) {
      throw error;
    }
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ZapierRequestError('Tempo de envio esgotado. Verifique sua conexão e tente de novo.', 0);
    }
    throw new ZapierRequestError('Não foi possível enviar os dados. Tente novamente em instantes.', 0);
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export const getZapierErrorMessage = (error: unknown): string => {
  if (error instanceof ZapierRequestError) {
    return error.message;
  }
  return 'Não foi possível enviar os dados. Tente novamente em instantes.';
};
