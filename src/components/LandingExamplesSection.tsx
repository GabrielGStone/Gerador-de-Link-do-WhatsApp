import type { MouseEvent, ReactNode } from 'react';
import { ReactComponent as ArrowRightIcon } from '../assets/arrow-right.svg';
import {
  LandingExamplesCard,
  LandingExamplesCardOptionLabel,
  LandingExamplesCardText,
  LandingExamplesCards,
  LandingExamplesFormCta,
  LandingExamplesInner,
  LandingExamplesRoot,
  LandingExamplesTitle,
} from '../styles/landingExamplesSection';

const FORM_SECTION_ID = 'gerador-formulario';

const scrollToForm = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById(FORM_SECTION_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const EXAMPLE_CARDS: { id: string; body: ReactNode }[] = [
  {
    id: 'ex-1',
    body: (
      <>
        Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe
        fornecer as melhores informações!
      </>
    ),
  },
  {
    id: 'ex-2',
    body: (
      <>
        Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo
        ajudar você rapidamente.
      </>
    ),
  },
  {
    id: 'ex-3',
    body: (
      <>
        Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje.
        Me conta como posso ajudar você! 😍
      </>
    ),
  },
];

const OPTION_LABELS = ['Opção 1', 'Opção 2', 'Opção 3'] as const;

/** Três exemplos de mensagem inicial para WhatsApp (mesmo grid da seção anterior). */
export const LandingExamplesSection = () => (
  <LandingExamplesRoot aria-labelledby="landing-examples-title">
    <LandingExamplesInner>
      <LandingExamplesTitle id="landing-examples-title">Exemplos de mensagem para WhatsApp</LandingExamplesTitle>
      <LandingExamplesCards>
        {EXAMPLE_CARDS.map(({ id, body }, index) => (
          <LandingExamplesCard key={id}>
            <LandingExamplesCardOptionLabel>{OPTION_LABELS[index]}</LandingExamplesCardOptionLabel>
            <LandingExamplesCardText>{body}</LandingExamplesCardText>
          </LandingExamplesCard>
        ))}
      </LandingExamplesCards>
      <LandingExamplesFormCta href={`#${FORM_SECTION_ID}`} onClick={scrollToForm}>
        Gere seu link grátis
        <ArrowRightIcon aria-hidden />
      </LandingExamplesFormCta>
    </LandingExamplesInner>
  </LandingExamplesRoot>
);
