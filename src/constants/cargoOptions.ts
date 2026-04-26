import type { SelectOption } from '../types';

const PLACEHOLDER: SelectOption = {
  value: '',
  label: 'Selecione o cargo',
  disabled: true,
};

/** Opções de cargo conforme especificação do formulário. */
export const CARGO_SELECT_OPTIONS: SelectOption[] = [
  PLACEHOLDER,
  { value: 'socio-ceo-proprietario', label: 'Sócio(a) / CEO / Proprietário(a)' },
  { value: 'diretor-vendas', label: 'Diretor(a) de Vendas' },
  { value: 'diretor-marketing', label: 'Diretor(a) de Marketing' },
  { value: 'diretor-outras', label: 'Diretor(a) Outras Áreas' },
  { value: 'gerente-marketing', label: 'Gerente de Marketing' },
  { value: 'gerente-vendas', label: 'Gerente de Vendas' },
  { value: 'coordenador-marketing', label: 'Coordenador(a)/Supervisor(a) de Marketing' },
  { value: 'coordenador-vendas', label: 'Coordenador(a)/Supervisor(a) de Vendas' },
  { value: 'analista-marketing', label: 'Analista/Assistente de Marketing' },
  { value: 'analista-vendas', label: 'Analista/Assistente de Vendas' },
  { value: 'vendedor-executivo', label: 'Vendedor(a) / Executivo(a) de Contas' },
  { value: 'estudante', label: 'Estudante' },
  { value: 'outros-cargos', label: 'Outros Cargos' },
];

export const getCargoLabel = (value: string): string => {
  const found = CARGO_SELECT_OPTIONS.find((o) => o.value === value && o.disabled !== true);
  return found !== undefined ? found.label : value;
};
