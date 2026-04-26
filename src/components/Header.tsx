import styled from 'styled-components';
import { rdStationBrandImage } from '../assets';
import { colorTextPrimary } from '../styles/colors';
import {
  fontFamilyDisplay,
  formPagePaddingInline,
  layoutMobileMediaMax,
  layoutSectionMaxWidth,
  spacingSize80,
} from '../styles/tokens';

const HeaderBar = styled.header`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  background: #ffffff;
`;

/** Faixa útil até 1920px; padding layout Figma (24px vertical, 80px nas laterais — spacing-size-80). */
const HeaderInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${layoutSectionMaxWidth};
  margin: 0 auto;
  min-height: 80px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: ${spacingSize80};
  padding-right: ${spacingSize80};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;

  @media ${layoutMobileMediaMax} {
    padding-left: ${formPagePaddingInline};
    padding-right: ${formPagePaddingInline};
    justify-content: center;
    flex-wrap: nowrap;
    gap: 0;
  }
`;

const RdStationLogo = styled.img`
  display: block;
  height: 32px;
  width: auto;
  max-width: min(143px, 100%);
  object-fit: contain;
`;

const ProductTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;

  @media ${layoutMobileMediaMax} {
    display: none;
  }
`;

const ProductTitle = styled.h1`
  margin: 0;
  font-family: ${fontFamilyDisplay};
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0;
  color: ${colorTextPrimary};
  text-align: right;
`;

export const Header = () => (
  <HeaderBar>
    <HeaderInner>
      <RdStationLogo
        src={rdStationBrandImage}
        alt="RD Station"
        width={143}
        height={32}
        decoding="async"
      />
      <ProductTitleGroup>
        <ProductTitle>Gerador de Link do WhatsApp</ProductTitle>
      </ProductTitleGroup>
    </HeaderInner>
  </HeaderBar>
);
