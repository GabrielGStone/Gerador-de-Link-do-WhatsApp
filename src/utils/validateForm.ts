import type { FormData, FormErrors, FormFieldKey } from '../types';
import { digitsOnly, toWaMeDigits } from './normalizeWhatsapp';

const LIMITS = {
  emailMax: 254,
  mensagemMin: 2,
  mensagemMax: 2000,
} as const;

/** Formato básico de e-mail (RFC simplificado). */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const validateEmail = (value: string): string | undefined => {
  const t = value.trim();
  if (t.length === 0) {
    return 'Informe seu e-mail.';
  }
  if (t.length > LIMITS.emailMax) {
    return `O e-mail deve ter no máximo ${LIMITS.emailMax} caracteres.`;
  }
  if (!EMAIL_REGEX.test(t)) {
    return 'Informe um e-mail válido.';
  }
  return undefined;
};

/**
 * BR: DDD (2) + 8 (fixo) ou 9 (celular) dígitos; normalizado com DDI 55 → 12 ou 13 dígitos.
 */
const validateWhatsapp = (value: string): string | undefined => {
  let d = digitsOnly(value);
  if (d.startsWith('55')) {
    d = d.slice(2);
  }
  if (d.length === 0) {
    return 'Informe o número do WhatsApp.';
  }
  if (d.length < 10 || d.length > 11) {
    return 'Use DDD e número com 10 ou 11 dígitos (só números).';
  }
  const full = toWaMeDigits(value);
  if (!full.startsWith('55') || (full.length !== 12 && full.length !== 13)) {
    return 'Número inválido. Confira o DDD e o número.';
  }
  return undefined;
};

const validateMensagem = (value: string): string | undefined => {
  const t = value.trim();
  if (t.length === 0) {
    return undefined;
  }
  if (t.length < LIMITS.mensagemMin) {
    return `A mensagem deve ter pelo menos ${LIMITS.mensagemMin} caracteres.`;
  }
  if (t.length > LIMITS.mensagemMax) {
    return `A mensagem deve ter no máximo ${LIMITS.mensagemMax} caracteres.`;
  }
  return undefined;
};

const validateCargo = (value: string): string | undefined => {
  if (value.trim().length === 0) {
    return 'Selecione um cargo.';
  }
  return undefined;
};

const validators: Record<FormFieldKey, (v: string) => string | undefined> = {
  whatsapp: validateWhatsapp,
  email: validateEmail,
  cargo: validateCargo,
  mensagem: validateMensagem,
};

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  (Object.keys(validators) as FormFieldKey[]).forEach((key) => {
    const msg = validators[key](data[key]);
    if (msg !== undefined) {
      errors[key] = msg;
    }
  });
  return errors;
};

export const isValidForm = (errors: FormErrors): boolean => Object.keys(errors).length === 0;
