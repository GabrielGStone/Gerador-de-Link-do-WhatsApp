import { useCallback, useState } from 'react';
import styled from 'styled-components';
import type { ResultData } from '../types';
import { Button } from '../components/Button';
import { ReactComponent as ArrowRightIcon } from '../assets/arrow-right.svg';
import { ReactComponent as CopyIcon } from '../assets/copy.svg';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { wppIconGreen } from '../assets';
import { rdStationMarketingProductUrl, rdStationMarketingPtUrl } from '../constants/externalUrls';
import { spacingSize12, spacingSize24 } from '../styles/tokens';
import {
  PageCardInner,
  ResultPageCard,
  ResultButtonsBox,
  ResultButtonsBottomRow,
  ResultButtonsTopRow,
  ResultCopyButtonLabel,
  ResultLinkActionsRow,
  ResultLinkAnchor,
  ResultLinkBox,
  ResultPageIcon,
  ResultPromoBox,
  ResultPromoLink,
  ResultPromoText,
  ResultPromoTitle,
  ResultSecondaryCtaButton,
  ResultSecondaryCtaHint,
  ResultSecondaryCtaIcon,
  ResultTitle,
  ResultTopBackLink,
} from '../styles/pageLayout';

const ResultPrimaryCtaButton = styled(Button)`
  width: fit-content;
  border-radius: ${spacingSize12};
  padding: ${spacingSize12} ${spacingSize24};
  border: 1px solid #003d5c;
`;

type ResultPageProps = {
  data: ResultData;
  onReset: () => void;
};

export const ResultPage = ({ data, onReset }: ResultPageProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data.link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }, [data.link]);

  const handleAddWhatsappButton = useCallback(() => {
    window.open(rdStationMarketingProductUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <ResultPageCard>
      <ResultPageIcon src={wppIconGreen} alt="" aria-hidden />
      <PageCardInner>
        <ResultTopBackLink type="button" onClick={onReset}>
          {'< Gerar outro link'}
        </ResultTopBackLink>

        <ResultTitle>Seu link de WhatsApp foi gerado com sucesso!</ResultTitle>

        <ResultLinkBox>
          <ResultLinkAnchor href={data.link} target="_blank" rel="noopener noreferrer">
            {data.link}
          </ResultLinkAnchor>
        </ResultLinkBox>

        <ResultLinkActionsRow>
          <ResultButtonsBox>
            <ResultButtonsTopRow>
              <ResultPrimaryCtaButton type="button" variant="primary" onClick={handleCopy}>
                <ResultCopyButtonLabel>
                  {copied ? <CheckIcon aria-hidden /> : <CopyIcon aria-hidden />}
                  {copied ? 'Link copiado' : 'Copie seu link'}
                </ResultCopyButtonLabel>
              </ResultPrimaryCtaButton>

              <ResultSecondaryCtaButton type="button" onClick={handleAddWhatsappButton}>
                Adicione um botão de WhatsApp no site
                <ResultSecondaryCtaIcon aria-hidden>
                  <ArrowRightIcon width={16} height={16} />
                </ResultSecondaryCtaIcon>
              </ResultSecondaryCtaButton>
            </ResultButtonsTopRow>

            <ResultButtonsBottomRow>
              <ResultSecondaryCtaHint>
                Faça isso com o teste grátis do <strong>RD Station Marketing</strong>
              </ResultSecondaryCtaHint>
            </ResultButtonsBottomRow>
          </ResultButtonsBox>
        </ResultLinkActionsRow>

        <ResultPromoBox aria-label="Saiba mais">
          <ResultPromoTitle>Quer aumentar em até 56% as suas vendas pelo WhatsApp?</ResultPromoTitle>
          <ResultPromoText>
            Conheça o <strong>RD Station Conversas</strong>, uma solução oficial de WhatsApp API que te garante um atendimento mais
            eficiente, lucrativo e seguro. Com a nossa ferramenta você diminui os riscos de ter seu número bloqueado e
            ainda melhorar suas taxas de conversão.
          </ResultPromoText>
          <ResultPromoText>Quer ficar por dentro sobre como nossa plataforma pode ajudar a sua empresa?</ResultPromoText>
          <ResultPromoLink href={rdStationMarketingPtUrl} target="_blank" rel="noopener noreferrer">
            Saiba mais {'>'}
          </ResultPromoLink>
        </ResultPromoBox>
      </PageCardInner>
    </ResultPageCard>
  );
};
