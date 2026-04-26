import type { ReactNode } from 'react';
import { ReactComponent as LandingAutoStepCheckIcon } from '../assets/landing-auto-step-check.svg';
import {
  LandingAutoMessagesInner,
  LandingAutoMessagesLead,
  LandingAutoMessagesRoot,
  LandingAutoMessagesStep,
  LandingAutoMessagesStepIconWrap,
  LandingAutoMessagesSteps,
  LandingAutoMessagesStepText,
  LandingAutoMessagesTitle,
} from '../styles/landingAutoMessagesSection';

const STEPS: { id: string; body: ReactNode }[] = [
  {
    id: 'marca',
    body: (
      <>
        Deixe bem claro de qual empresa se trata, mencione o nome do seu negócio logo na mensagem para reforçar a
        identificação com a marca.
      </>
    ),
  },
  {
    id: 'proximos-passos',
    body: (
      <>
        Informe claramente os próximos passos para evitar ansiedade. Por exemplo, um vendedor entrará em contato?
        Quanto tempo isso demora?
      </>
    ),
  },
  {
    id: 'humanizada',
    body: (
      <>
        Faça uma comunicação humanizada, ou seja, escreva como você estivesse falando com outra pessoa (até porque,
        está mesmo!), seguindo os padrões da sua marca.
      </>
    ),
  },
];

/** Conteúdo editorial: como mensagens automáticas funcionam com o gerador de link. */
export const LandingAutoMessagesSection = () => (
  <LandingAutoMessagesRoot aria-labelledby="landing-auto-messages-title">
    <LandingAutoMessagesInner>
      <LandingAutoMessagesTitle id="landing-auto-messages-title">
        Como criar mensagens automáticas para o WhatsApp
      </LandingAutoMessagesTitle>
      <LandingAutoMessagesLead>
        Agora que você viu como fazer link do WhatsApp é fácil, confira algumas ideias para mensagens que agilizam a comunicação!
      </LandingAutoMessagesLead>
      <LandingAutoMessagesSteps>
        {STEPS.map(({ id, body }) => (
          <LandingAutoMessagesStep key={id}>
            <LandingAutoMessagesStepIconWrap aria-hidden>
              <LandingAutoStepCheckIcon width={24} height={24} />
            </LandingAutoMessagesStepIconWrap>
            <LandingAutoMessagesStepText>{body}</LandingAutoMessagesStepText>
          </LandingAutoMessagesStep>
        ))}
      </LandingAutoMessagesSteps>
    </LandingAutoMessagesInner>
  </LandingAutoMessagesRoot>
);
