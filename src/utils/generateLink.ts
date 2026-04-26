import type { FormData } from '../types';
import { digitsOnly, toWaMeDigits } from './normalizeWhatsapp';

/**
 * Texto do `?text=`: se a mensagem for só um número no formato internacional BR (55…),
 * envia com "+" na frente do 55 para aparecer corretamente no WhatsApp.
 */
export const normalizeMensagemForWhatsappPrefill = (raw: string): string => {
  const t = raw.trim();
  if (t.length === 0) {
    return '';
  }
  const d = digitsOnly(t);
  const phoneish = /^[\d\s()+.-]+$/.test(t);
  if (phoneish && /^55\d{10,11}$/.test(d)) {
    return `+${d}`;
  }
  return t;
};

/**
 * Monta URL wa.me a partir do WhatsApp normalizado. Se houver mensagem, inclui `?text=`.
 */
export const generateLink = (data: FormData): string => {
  const fullNumber = toWaMeDigits(data.whatsapp);
  const base = `https://wa.me/${fullNumber}`;
  const text = normalizeMensagemForWhatsappPrefill(data.mensagem);
  if (text.length === 0) {
    return base;
  }
  const params = new URLSearchParams({ text });
  return `${base}?${params.toString()}`;
};
