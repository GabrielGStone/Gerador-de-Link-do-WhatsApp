/**
 * Dados do formulário enviados ao Zapier e usados para gerar o link wa.me.
 * `mensagem` vazia gera link sem parâmetro `text`.
 */
export interface FormData {
  whatsapp: string;
  email: string;
  cargo: string;
  mensagem: string;
}

export type FormFieldKey = keyof FormData;

/** Erros por campo após validação. */
export type FormErrors = Partial<Record<FormFieldKey, string>>;

export type ResultData = FormData & {
  link: string;
};

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};
