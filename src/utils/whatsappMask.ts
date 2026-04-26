import { digitsOnly } from './normalizeWhatsapp';

/**
 * Valor do campo WhatsApp: só dígitos (DDD + número), no máx. 11.
 * Remove DDI 55 ao colar número internacional completo.
 * Usado tanto para máscara quanto para normalização/limite.
 */
export const sanitizeWhatsappFieldInput = (raw: string): string => {
  let d = digitsOnly(raw);
  if (d.startsWith('55') && d.length > 2) {
    d = d.slice(2);
  }
  if (d.length > 11) {
    d = d.slice(0, 11);
  }
  return d;
};

/**
 * Máscara BR para exibição durante digitação.
 *
 * Importante: com apenas 2 dígitos (DDD), não fecha o parênteses (fica "(11"),
 * para permitir apagar/corrigir o DDD sem a máscara “recolocar” caracteres.
 */
export const formatWhatsappBrDisplay = (raw: string): string => {
  const d = sanitizeWhatsappFieldInput(raw);

  if (d.length === 0) {
    return '';
  }
  if (d.length === 1) {
    return `(${d}`;
  }

  const ddd = d.slice(0, 2);
  if (d.length === 2) {
    return `(${ddd}`;
  }

  const rest = d.slice(2);
  const prefix = `(${ddd}) `;

  if (rest.length <= 8) {
    if (rest.length <= 4) {
      return prefix + rest;
    }
    return `${prefix}${rest.slice(0, 4)}-${rest.slice(4)}`;
  }
  if (rest.length <= 5) {
    return prefix + rest.slice(0, 5);
  }
  return `${prefix}${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
};
