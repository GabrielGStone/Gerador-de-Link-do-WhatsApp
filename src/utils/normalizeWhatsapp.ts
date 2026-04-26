/**
 * Apenas dígitos.
 */
export const digitsOnly = (input: string): string => input.replace(/\D/g, '');

/**
 * Normaliza para número wa.me (DDI 55 + DDD + número).
 * Se o usuário não informar DDI, assume Brasil (55).
 */
export const toWaMeDigits = (whatsapp: string): string => {
  let d = digitsOnly(whatsapp);
  if (d.length === 0) {
    return '';
  }
  if (!d.startsWith('55')) {
    d = `55${d}`;
  }
  return d;
};

/** E.164 visível (ex.: +5511999999999) para resumo, CRM ou Zapier — não use no path `wa.me` (só dígitos). */
export const toWhatsappInternational = (whatsapp: string): string => {
  const d = toWaMeDigits(whatsapp);
  return d.length > 0 ? `+${d}` : '';
};
