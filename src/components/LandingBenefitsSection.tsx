import type { ReactElement } from 'react';
import { postFormGettyImage } from '../assets';
import {
  LandingBenefitsIconBolt,
  LandingBenefitsIconMessage,
  LandingBenefitsIconShortcut,
} from './LandingBenefitsIcons';
import {
  LandingBenefitsBox,
  LandingBenefitsBoxGroup,
  LandingBenefitsBoxIconWrap,
  LandingBenefitsBoxText,
  LandingBenefitsBoxTitle,
  LandingBenefitsImage,
  LandingBenefitsRoot,
  LandingBenefitsRow,
} from '../styles/landingBenefitsSection';

type BenefitBoxItem = {
  title: string;
  text: string;
  icon: ReactElement;
};

const BENEFIT_BOXES: BenefitBoxItem[] = [
  {
    title: 'Atalho rumo às vendas',
    text: 'O Gerador de link do WhatsApp faz com que usuários se transformem em contatos (Leads) e iniciem conversas certeiras com sua marca.',
    icon: <LandingBenefitsIconShortcut />,
  },
  {
    title: 'Mensagem automática',
    text: 'Você automatiza mensagens estimulando o início da conversa, o que facilita a vida dos usuários e clientes.',
    icon: <LandingBenefitsIconMessage />,
  },
  {
    title: 'Rápido e 100% gratuito',
    text: 'Não sabe como fazer link de WhatsApp? O Gerador da RD Station é fácil de usar e permite gerar links em segundos!',
    icon: <LandingBenefitsIconBolt />,
  },
];

/** Faixa de benefícios entre o card do formulário e a pitch (ícones + imagem). */
export function LandingBenefitsSection() {
  return (
    <LandingBenefitsRoot aria-label="Benefícios do gerador">
      <LandingBenefitsRow>
        <LandingBenefitsBoxGroup>
          {BENEFIT_BOXES.map(({ title, text, icon }) => (
            <LandingBenefitsBox key={title}>
              <LandingBenefitsBoxIconWrap>{icon}</LandingBenefitsBoxIconWrap>
              <LandingBenefitsBoxTitle>{title}</LandingBenefitsBoxTitle>
              <LandingBenefitsBoxText>{text}</LandingBenefitsBoxText>
            </LandingBenefitsBox>
          ))}
        </LandingBenefitsBoxGroup>
        <LandingBenefitsImage
          src={postFormGettyImage}
          alt=""
          width={340}
          height={206}
          decoding="async"
          aria-hidden
        />
      </LandingBenefitsRow>
    </LandingBenefitsRoot>
  );
}
