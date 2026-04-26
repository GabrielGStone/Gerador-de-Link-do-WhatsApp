import styled from 'styled-components';
import { colorGray10, colorTextBodySlate, colorTextPrimary } from './colors';
import { fontFamilySans, layoutMobileMediaMax, layoutSectionMaxWidth, sizeSpacing05 } from './tokens';

const footerPaddingInline = 'clamp(1.5rem, 28.75vw, 552px)';

const footerGap = '10px';

export const AppFooterRoot = styled.footer`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  background-color: ${colorGray10};
`;

export const AppFooterInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${layoutSectionMaxWidth};
  margin: 0 auto;
  min-height: 56px;
  padding-top: ${sizeSpacing05};
  padding-bottom: ${sizeSpacing05};
  padding-left: ${footerPaddingInline};
  padding-right: ${footerPaddingInline};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: ${footerGap};
  font-family: ${fontFamilySans};
  font-size: 0.875rem;
  line-height: 1.35;
  color: ${colorTextBodySlate};

  & > a,
  & > span {
    flex-shrink: 0;
    white-space: nowrap;
  }

  @media ${layoutMobileMediaMax} {
    font-size: 0.8125rem;
  }
`;

export const AppFooterLink = styled.a`
  color: ${colorTextPrimary};
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    text-decoration-thickness: 2px;
  }

  &:focus-visible {
    outline: 2px solid #003d5c;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
