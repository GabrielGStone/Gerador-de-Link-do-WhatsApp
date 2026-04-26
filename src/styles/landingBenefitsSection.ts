import styled from 'styled-components';
import { colorGlowCyan, colorGlowCyanDeep, colorTextPrimary } from './colors';
import {
  layoutMobileMediaMax,
  layoutSectionPaddingInlineBalanced,
  layoutWideContentMax,
  layoutWideContentMin,
  sizeSpacing01,
} from './tokens';

export const LandingBenefitsRoot = styled.section`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: ${layoutSectionPaddingInlineBalanced};
  padding-right: ${layoutSectionPaddingInlineBalanced};
`;

const benefitsBoxGap = '32px';

export const LandingBenefitsBoxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  gap: ${benefitsBoxGap};
  box-sizing: border-box;
  width: 100%;
  min-width: 0;

  @media (min-width: ${layoutWideContentMin}) {
    flex: 1 1 0;
    flex-wrap: nowrap;
    min-width: 0;
  }

  @media (max-width: ${layoutWideContentMax}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    flex: none;

    & > *:nth-child(3) {
      grid-column: 1 / -1;
      justify-self: start;
      width: min(100%, calc((100% - ${benefitsBoxGap}) / 2));
    }
  }

  @media ${layoutMobileMediaMax} {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 340px;
    margin-inline: auto;

    & > *:nth-child(3) {
      grid-column: auto;
      justify-self: stretch;
      width: 100%;
    }
  }
`;

export const LandingBenefitsRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  overflow: visible;
  gap: clamp(1rem, 2vw, 2rem);

  @media (min-width: ${layoutWideContentMin}) {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media (max-width: ${layoutWideContentMax}) {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 2rem;
  }

  @media ${layoutMobileMediaMax} {
    align-items: center;
  }
`;

export const LandingBenefitsBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 206px;
  padding: 24px;
  border-radius: 4px;
  border: 2px solid ${colorGlowCyan};
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${layoutWideContentMin}) {
    flex: 1 1 0;
    max-width: none;
    min-height: 206px;
  }

  @media (max-width: ${layoutWideContentMax}) {
    flex: none;
    max-width: none;
    min-height: 206px;
  }
`;

export const LandingBenefitsBoxIconWrap = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: ${colorGlowCyanDeep};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const LandingBenefitsBoxTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 0.9375rem;
  }
`;

export const LandingBenefitsBoxText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 0.8125rem;
  }
`;

export const LandingBenefitsImage = styled.img`
  flex: 0 0 auto;
  width: 100%;
  max-width: 340px;
  height: auto;
  aspect-ratio: 340 / 206;
  align-self: flex-start;
  border-radius: ${sizeSpacing01};
  object-fit: cover;
  display: block;

  @media (max-width: ${layoutWideContentMax}) {
    max-width: 100%;
    align-self: stretch;
  }

  @media ${layoutMobileMediaMax} {
    max-width: 340px;
    width: 100%;
    align-self: center;
  }

  @media (min-width: ${layoutWideContentMin}) {
    flex: 0 1 340px;
    width: 340px;
    max-width: 340px;
    min-width: 0;
    height: auto;
    align-self: flex-start;
    object-fit: cover;
  }
`;
