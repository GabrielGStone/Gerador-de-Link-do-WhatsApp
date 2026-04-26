import styled from 'styled-components';
import { colorGlowCyan, colorGlowLime, colorTextFootnote, colorTextPrimary } from './colors';
import {
  fontFamilyDisplay,
  landingPitchTitleMarkBarHeight,
  layoutMobileMediaMax,
  layoutSectionPaddingInlineBalanced,
  sizeSpacing02,
  sizeSpacing09,
} from './tokens';

const landingPitchColumnGap = '120px';

export const LandingPitchRoot = styled.section`
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
`;

export const LandingPitchInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 402px;
  margin: 0;
  padding-top: ${sizeSpacing09};
  padding-bottom: ${sizeSpacing09};
  padding-left: ${layoutSectionPaddingInlineBalanced};
  padding-right: ${layoutSectionPaddingInlineBalanced};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(2rem, 8vw, ${landingPitchColumnGap});
`;

export const LandingPitchTitle = styled.h2`
  box-sizing: border-box;
  margin: 0;
  flex: 0 0 auto;
  width: 519px;
  padding-right: 10px;
  max-width: 100%;
  height: auto;
  opacity: 1;
  font-family: ${fontFamilyDisplay};
  font-weight: 700;
  font-style: normal;
  font-size: 48px;
  line-height: 140%;
  letter-spacing: 0;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 1.75rem;
  }
`;

/* Marca-texto do título (ciano/limão). */
export const LandingPitchTitleMark = styled.span<{ $tone: 'cyan' | 'lime' }>`
  position: relative;
  z-index: 0;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: -0.22em;
    right: -0.22em;
    bottom: 0.1em;
    height: ${landingPitchTitleMarkBarHeight};
    background-color: ${({ $tone }) => ($tone === 'lime' ? colorGlowLime : colorGlowCyan)};
    border-radius: ${sizeSpacing02};
  }
`;

export const LandingPitchPanel = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 809px;
  flex: 1 1 280px;
  min-width: min(100%, 280px);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LandingPitchPanelLead = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.45;
  color: ${colorTextPrimary};

  strong {
    font-weight: 700;
  }

  @media ${layoutMobileMediaMax} {
    font-size: 1rem;
  }
`;

export const LandingPitchPanelText = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${colorTextPrimary};
`;

export const LandingPitchPanelFootnote = styled.p`
  margin: 0;
  font-size: 0.6875rem;
  line-height: 1.4;
  font-weight: 400;
  font-style: italic;
  color: ${colorTextFootnote};
`;

export const LandingPitchChecklist = styled.ul`
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const LandingPitchChecklistItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const LandingPitchChecklistIconWrap = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.12em;

  svg {
    display: block;
    width: 24px;
    height: auto;
  }
`;

export const LandingPitchChecklistText = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.45;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 1rem;
  }
`;

export const LandingPitchFormCta = styled.a`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  align-self: flex-start;
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
