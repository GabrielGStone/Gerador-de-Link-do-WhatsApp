import { type MouseEvent } from 'react';
import { ReactComponent as ArrowRightIcon } from '../assets/arrow-right.svg';
import { ReactComponent as PitchCheckIcon } from '../assets/pitch-check.svg';
import {
  LandingPitchChecklist,
  LandingPitchChecklistIconWrap,
  LandingPitchChecklistItem,
  LandingPitchChecklistText,
  LandingPitchFormCta,
  LandingPitchInner,
  LandingPitchPanel,
  LandingPitchPanelFootnote,
  LandingPitchPanelLead,
  LandingPitchRoot,
  LandingPitchTitle,
  LandingPitchTitleMark,
} from '../styles/landingPitchSection';

const FORM_SECTION_ID = 'gerador-formulario';

const scrollToForm = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById(FORM_SECTION_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const LANDING_PITCH_CHECKLIST_ITEMS = [
  'Otimiza a geração de Leads.',
  'Ofereça uma opção rápida e prática para tirar dúvidas sobre produtos e serviços.',
  'Oferece uma ótima experiência ao usuário.',
] as const;

export const LandingPitchSection = () => (
  <LandingPitchRoot aria-labelledby="landing-pitch-title">
    <LandingPitchInner>
      <LandingPitchTitle id="landing-pitch-title">
        Acelere suas conversas com o <LandingPitchTitleMark $tone="cyan">Gerador de link de</LandingPitchTitleMark>{' '}
        <LandingPitchTitleMark $tone="lime">WhatsApp</LandingPitchTitleMark>
      </LandingPitchTitle>
      <LandingPitchPanel>
        <LandingPitchPanelLead>
          O WhatsApp é uma das plataformas preferidas pelos brasileiros —{' '}
          <strong>são mais de 165 milhões de usuários*</strong> (ou 96,4% da população que faz uso das redes sociais).
          Quando você traz um link de WhatsApp nas redes sociais ou site da sua empresa, só tem vantagens:
        </LandingPitchPanelLead>
        <LandingPitchPanelFootnote>*Dados da pesquisa Digital 2022: Brazil</LandingPitchPanelFootnote>
        <LandingPitchChecklist aria-label="Vantagens de usar link de WhatsApp">
          {LANDING_PITCH_CHECKLIST_ITEMS.map((text) => (
            <LandingPitchChecklistItem key={text}>
              <LandingPitchChecklistIconWrap aria-hidden>
                <PitchCheckIcon width={24} height={25} />
              </LandingPitchChecklistIconWrap>
              <LandingPitchChecklistText>{text}</LandingPitchChecklistText>
            </LandingPitchChecklistItem>
          ))}
        </LandingPitchChecklist>
        <LandingPitchFormCta href={`#${FORM_SECTION_ID}`} onClick={scrollToForm}>
          Gere seu link grátis
          <ArrowRightIcon aria-hidden />
        </LandingPitchFormCta>
      </LandingPitchPanel>
    </LandingPitchInner>
  </LandingPitchRoot>
);
