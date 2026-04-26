import styled from 'styled-components';
import { colorTextBodySlate, colorTextPrimary } from './colors';
import {
  fontFamilyDisplay,
  fontFamilySans,
  layoutBelowNoteMediaMax,
  layoutBreakpointNote,
  layoutLandingIntroColumnMax,
  layoutMobileMediaMax,
  layoutSectionPaddingInlineBalanced,
} from './tokens';

export const LandingAutoMessagesRoot = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 513px;
  margin: 0;
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: ${layoutSectionPaddingInlineBalanced};
  padding-right: ${layoutSectionPaddingInlineBalanced};
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingAutoMessagesInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 40px;
`;

export const LandingAutoMessagesTitle = styled.h2`
  margin: 0;
  font-family: ${fontFamilyDisplay};
  font-weight: 700;
  font-style: normal;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0;
  color: ${colorTextPrimary};
  text-align: center;
  width: 100%;
  max-width: ${layoutLandingIntroColumnMax};
  margin-inline: auto;
  box-sizing: border-box;

  @media ${layoutMobileMediaMax} {
    font-size: 1.625rem;
  }
`;

export const LandingAutoMessagesLead = styled.p`
  margin: 0;
  font-family: ${fontFamilySans};
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0;
  text-align: center;
  color: ${colorTextBodySlate};
  width: 100%;
  max-width: ${layoutLandingIntroColumnMax};
  margin-inline: auto;
  box-sizing: border-box;

  @media ${layoutMobileMediaMax} {
    font-size: 1.125rem;
  }
`;

export const LandingAutoMessagesSteps = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  width: 100%;

  /* Abaixo do Note: empilha e alinha na mesma coluna do título. */
  @media ${layoutBelowNoteMediaMax} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    max-width: ${layoutLandingIntroColumnMax};
    margin-inline: auto;
  }

  @media (min-width: ${layoutBreakpointNote}) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    max-width: none;
    margin-inline: 0;
  }
`;

export const LandingAutoMessagesStep = styled.li`
  box-sizing: border-box;
  width: 322px;
  max-width: 100%;
  flex: 0 1 322px;
  min-width: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: ${colorTextBodySlate};
  /* Mobile e tablet: ícone à esquerda do texto. Note e PC: ícone no topo, texto centralizado. */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  text-align: left;

  @media ${layoutMobileMediaMax} {
    font-size: 0.875rem;
  }

  @media ${layoutBelowNoteMediaMax} {
    width: 100%;
    max-width: 100%;
    flex: none;
  }

  @media (min-width: ${layoutBreakpointNote}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    flex: 1 1 0;
    max-width: 322px;
    width: auto;
  }
`;

export const LandingAutoMessagesStepIconWrap = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const LandingAutoMessagesStepText = styled.span`
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  text-align: left;

  @media (min-width: ${layoutBreakpointNote}) {
    flex: none;
    width: 100%;
    text-align: center;
  }

  strong {
    font-weight: 600;
    color: ${colorTextBodySlate};
  }

  code {
    font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
    font-size: 0.9em;
    background: #f3f4f6;
    padding: 0.1em 0.35em;
    border-radius: 4px;
    color: ${colorTextBodySlate};
  }
`;
