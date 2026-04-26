import styled from 'styled-components';
import { colorTextBodySlate, colorTextPrimary } from './colors';
import {
  fontFamilyDisplay,
  fontFamilySans,
  layoutLandingIntroColumnMax,
  layoutMobileMediaMax,
  layoutSectionPaddingInlineBalanced,
  layoutTabletToBelowNoteMedia,
  sizeSpacing03,
  sizeSpacing05,
  sizeSpacing10,
  sizeSpacing10OneHalf,
} from './tokens';

export const LandingExamplesRoot = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 479px;
  margin: 0;
  padding-top: ${sizeSpacing10};
  padding-bottom: ${sizeSpacing10OneHalf};
  padding-left: ${layoutSectionPaddingInlineBalanced};
  padding-right: ${layoutSectionPaddingInlineBalanced};
  background-color: #f8fafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingExamplesInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 40px;
`;

export const LandingExamplesTitle = styled.h2`
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

export const LandingExamplesLead = styled.p`
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

export const LandingExamplesCards = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 12px;
  width: 100%;

  @media ${layoutMobileMediaMax} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    max-width: ${layoutLandingIntroColumnMax};
    margin-inline: auto;
    gap: 24px;
  }

  @media ${layoutTabletToBelowNoteMedia} {
    flex-wrap: nowrap;
  }
`;

export const LandingExamplesCard = styled.li`
  box-sizing: border-box;
  width: 389.33px;
  max-width: 100%;
  flex: 0 1 389.33px;
  min-width: 0;
  height: 180px;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e7eb;
  border-radius: ${sizeSpacing03};
  padding: ${sizeSpacing05};
  font-size: 0.9375rem;
  line-height: 1.55;
  color: ${colorTextBodySlate};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  gap: 16px;

  @media ${layoutMobileMediaMax} {
    font-size: 0.875rem;
  }

  @media ${layoutMobileMediaMax} {
    width: 100%;
    max-width: 100%;
    flex: none;
    height: auto;
  }

  @media ${layoutTabletToBelowNoteMedia} {
    flex: 1 1 0;
    min-width: 0;
    width: auto;
    max-width: none;
    height: auto;
  }
`;

export const LandingExamplesCardOptionLabel = styled.span`
  flex-shrink: 0;
  font-family: ${fontFamilyDisplay};
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0;
  color: #005a87;
  text-align: left;

  @media ${layoutMobileMediaMax} {
    font-size: 1.125rem;
  }
`;

export const LandingExamplesCardText = styled.span`
  display: block;
  width: 100%;
  max-width: 100%;
  text-align: left;

  code {
    font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
    font-size: 0.9em;
    background: #f3f4f6;
    padding: 0.1em 0.35em;
    border-radius: 4px;
    color: ${colorTextBodySlate};
  }
`;

export const LandingExamplesFormCta = styled.a`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  color: #fff;
  background: #003d5c;
  transition: background-color 0.15s ease, transform 0.1s ease;

  @media ${layoutMobileMediaMax} {
    font-size: 0.9375rem;
  }

  &:hover {
    background: #005a85;
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    display: block;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`;
