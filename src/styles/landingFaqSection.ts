import styled from 'styled-components';
import { colorTextBodySlate, colorTextPrimary } from './colors';
import {
  fontFamilyDisplay,
  fontFamilySans,
  layoutMobileMediaMax,
  layoutSectionPaddingInlineBalanced,
  layoutWideContentMax,
  sizeSpacing02,
  sizeSpacing03,
  spacingSize16,
} from './tokens';

const landingFaqSectionPaddingBlock = '80px';

export const LandingFaqRoot = styled.section`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  background: #ffffff;
`;

export const LandingFaqInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-top: ${landingFaqSectionPaddingBlock};
  padding-bottom: ${landingFaqSectionPaddingBlock};
  padding-left: ${layoutSectionPaddingInlineBalanced};
  padding-right: ${layoutSectionPaddingInlineBalanced};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
`;

export const LandingFaqToolbar = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const LandingFaqMain = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, min(380px, 100%)) minmax(0, 1fr);
  align-items: start;
  gap: clamp(1.5rem, 4vw, 3.5rem);

  @media (max-width: ${layoutWideContentMax}) {
    grid-template-columns: 1fr;
  }
`;

export const LandingFaqCloseAllButton = styled.button`
  box-sizing: border-box;
  width: 154px;
  height: 38px;
  margin: 0;
  padding: ${sizeSpacing02} ${spacingSize16};
  border-radius: ${sizeSpacing03};
  gap: ${sizeSpacing02};
  border: 1px solid #003d5c;
  background-color: #ffffff;
  color: #003d5c;
  cursor: pointer;
  font-family: ${fontFamilySans};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease, color 0.15s ease;

  @media ${layoutMobileMediaMax} {
    font-size: 0.8125rem;
  }

  &:hover {
    background-color: #003d5c;
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #003d5c;
    outline-offset: 2px;
  }
`;

export const LandingFaqCloseAllIcon = styled.span<{ $expanded: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  /* Ícone aponta à direita: +90° = baixo (Abrir todos), −90° = cima (Fechar todos). */
  transform: rotate(${({ $expanded }) => ($expanded ? '-90deg' : '90deg')});
  transition: transform 0.2s ease;
`;

export const LandingFaqTitle = styled.h2`
  margin: 0;
  font-family: ${fontFamilyDisplay};
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0;
  color: ${colorTextPrimary};
  text-align: left;
  box-sizing: border-box;
  min-width: 0;
  max-width: 100%;

  @media ${layoutMobileMediaMax} {
    font-size: 1.25rem;
  }
`;

export const LandingFaqList = styled.div`
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const LandingFaqSummary = styled.summary`
  box-sizing: border-box;
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  font-family: ${fontFamilyDisplay};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.45;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 1rem;
  }

  &::marker {
    content: '';
  }

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: '';
    flex-shrink: 0;
    width: 0.55rem;
    height: 0.55rem;
    border-right: 3px solid currentColor;
    border-bottom: 3px solid currentColor;
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    transition: transform 0.2s ease;
  }
`;

export const LandingFaqSummaryText = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  text-align: start;
`;

export const LandingFaqAnswer = styled.div`
  box-sizing: border-box;
  padding: 0 0 1.25rem 0;
`;

export const LandingFaqAnswerText = styled.p`
  margin: 0;
  font-family: ${fontFamilySans};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.55;
  color: ${colorTextBodySlate};

  @media ${layoutMobileMediaMax} {
    font-size: 0.9375rem;
  }
`;

const landingFaqDividerColor = '#00D4FF';

export const LandingFaqItem = styled.details`
  box-sizing: border-box;

  &:first-of-type {
    border-top: 1px solid ${landingFaqDividerColor};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${landingFaqDividerColor};
  }

  &[open] ${LandingFaqSummary}::after {
    transform: rotate(225deg);
  }
`;
