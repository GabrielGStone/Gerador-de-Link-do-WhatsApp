import styled from 'styled-components';
import {
  colorGlowCyanRgb,
  colorGlowLimeRgb,
  colorGray10,
  colorResultGlowCyanRgb,
  colorResultGlowMintRgb,
  colorTextPrimary,
} from './colors';
import {
  fontFamilySans,
  fontFamilyDisplay,
  formPagePaddingInline,
  layoutBelowNoteMediaMax,
  layoutBreakpointLg,
  layoutBreakpointNote,
  layoutBreakpointPc,
  layoutBreakpointTablet,
  layoutBreakpointXl,
  layoutMobileMediaMax,
  layoutNoteToBelowPcMedia,
  layoutTabletToBelowNoteMedia,
  sizeSpacing04,
  sizeSpacing05,
  sizeSpacing11,
  sizeSpacing13,
  sizeSpacing15,
  spacingSize12,
  spacingSize24,
} from './tokens';

const pageCardPaddingInline = `clamp(1.5rem, 6vw, ${sizeSpacing15})`;

export const PageCard = styled.div`
  position: relative;
  width: 100%;
  margin-inline: auto;
  margin-bottom: ${spacingSize24};
  box-sizing: border-box;
  overflow: visible;
  border-radius: ${sizeSpacing05};
  background-color: ${colorGray10};
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-image: radial-gradient(
      ellipse 32vw 80% at 100% 40%,
      rgba(${colorGlowLimeRgb}, 0.22) 0%,
      rgba(${colorGlowLimeRgb}, 0.16) 11%,
      rgba(${colorGlowLimeRgb}, 0.12) 24%,
      rgba(${colorGlowLimeRgb}, 0.1) 38%,
      rgba(${colorGlowLimeRgb}, 0.08) 52%,
      rgba(${colorGlowLimeRgb}, 0.04) 64%,
      transparent 78%
    ),
    radial-gradient(
      ellipse 40vw 80% at 0% 60%,
      rgba(${colorGlowCyanRgb}, 0.92) 0%,
      rgba(${colorGlowCyanRgb}, 0.58) 11%,
      rgba(${colorGlowCyanRgb}, 0.48) 24%,
      rgba(${colorGlowCyanRgb}, 0.3) 38%,
      rgba(${colorGlowCyanRgb}, 0.18) 52%,
      rgba(${colorGlowCyanRgb}, 0.08) 64%,
      transparent 78%
    );
  border: solid #d1d5db;
  border-width: 0 0 1px;
  padding-top: ${sizeSpacing11};
  padding-bottom: ${sizeSpacing11};
  padding-left: ${pageCardPaddingInline};
  padding-right: ${pageCardPaddingInline};
  box-shadow: none;
`;

export const ResultPageCard = styled(PageCard)`
  /*
   * overflow-y: hidden faria o eixo X virar auto e cortaria o ícone do resultado.
   * clip mantém o recorte vertical sem “fechar” o X.
   */
  @media ${layoutBelowNoteMediaMax} {
    overflow: visible clip;
  }

  background-image: radial-gradient(
      ellipse 32vw 80% at 100% 40%,
      rgba(${colorResultGlowCyanRgb}, 0.42) 0%,
      rgba(${colorResultGlowCyanRgb}, 0.38) 11%,
      rgba(${colorResultGlowCyanRgb}, 0.28) 24%,
      rgba(${colorResultGlowCyanRgb}, 0.18) 38%,
      rgba(${colorResultGlowCyanRgb}, 0.18) 52%,
      rgba(${colorResultGlowCyanRgb}, 0.08) 64%,
     
      transparent 78%
    ),
    radial-gradient(
      ellipse 40vw 80% at 0% 60%,
      rgba(${colorResultGlowMintRgb}, 0.82) 0%,
      rgba(${colorResultGlowMintRgb}, 0.86) 11%,
      rgba(${colorResultGlowMintRgb}, 0.82) 24%,
      rgba(${colorResultGlowMintRgb}, 0.41) 38%,
      rgba(${colorResultGlowMintRgb}, 0.24) 52%,
      rgba(${colorResultGlowMintRgb}, 0.14) 64%,
      transparent 78%
    );
`;

export const PageCardInner = styled.div`
  position: relative;
  isolation: isolate;
  z-index: 2;
  width: 100%;
  max-width: 838px;
  margin-inline: auto;
  box-sizing: border-box;
  padding-inline: 0;
  overflow: visible;
`;

export const PageTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.375rem;
  line-height: 1.3;
  color: ${colorTextPrimary};
  text-align: center;

  @media ${layoutMobileMediaMax} {
    font-size: 1.25rem;
  }

  @media (min-width: ${layoutBreakpointTablet}) {
    font-size: 1.625rem;
  }
`;

export const PageSubtitle = styled.p`
  margin: 0 0 1.25rem;
  color: ${colorTextPrimary};
  font-size: 0.9375rem;
  line-height: 1.5;
  text-align: center;

  @media ${layoutMobileMediaMax} {
    font-size: 0.875rem;
  }
`;

export const FormAlert = styled.div`
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
  font-size: 0.9rem;
  line-height: 1.45;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px #e5e7eb, 0 0 0 4px #f87171;
  }
`;

export const FormPageBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-top: 72px;
  padding-bottom: 72px;
`;

export const FormPageIcon = styled('img')`
  position: absolute;
  z-index: -1;
  left: 100px;
  top: auto;
  bottom: 16px;
  width: 98px;
  height: 99px;
  display: block;
  max-width: min(344px, 92vw);
  aspect-ratio: ${98} / ${99};
  margin: 0;
  object-fit: contain;
  pointer-events: none;
  transform: rotate(-12.76deg);
  transform-origin: left bottom;
  transition:
    left 220ms ease,
    top 220ms ease,
    bottom 220ms ease,
    width 220ms ease,
    height 220ms ease;

  @media (min-width: ${layoutBreakpointTablet}) {
    bottom: auto;
    left: -30px;
    top: 540px;
    width: 174px;
    height: auto;
    aspect-ratio: ${174} / ${176};
  }

  @media (min-width: ${layoutBreakpointLg}) {
    left: -53px;
  }

  @media (min-width: ${layoutBreakpointXl}) {
    left: -181px;
  }

  @media (min-width: ${layoutBreakpointNote}) {
    left: -261px;
    top: 460px;
    width: 240px;
    height: auto;
    aspect-ratio: ${174} / ${176};
  }

  @media (min-width: ${layoutBreakpointPc}) {
    left: -501px;
    top: 370px;
    width: 344px;
    height: auto;
    aspect-ratio: ${174} / ${176};
  }
`;

export const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const AppMain = styled.main`
  flex: 1 0 auto;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const FormPageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0 ${formPagePaddingInline};
`;

export const ResultLinkBox = styled.div`
  margin: 0 0 1rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  word-break: break-all;
`;

export const ResultLinkAnchor = styled.a`
  color: #075e54;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ResultTopBackLink = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0 0 0.75rem;
  cursor: pointer;
  font-family: ${fontFamilySans};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-align: left;
  color: #003d5c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #003d5c;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const ResultTitle = styled.h2`
  margin: 0 0 1.25rem;
  font-size: 1.375rem;
  line-height: 1.3;
  color: ${colorTextPrimary};
  text-align: left;

  @media ${layoutMobileMediaMax} {
    font-size: 1.25rem;
  }

  @media (min-width: ${layoutBreakpointTablet}) {
    font-size: 1.625rem;
  }
`;

export const ResultLinkActionsRow = styled.div`
  width: 100%;
`;

export const ResultButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${layoutBelowNoteMediaMax} {
    gap: 1rem;
    align-items: center;
  }
`;

export const ResultButtonsTopRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;

  @media ${layoutBelowNoteMediaMax} {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    & > * {
      width: auto;
      max-width: 100%;
      align-self: center;
    }
  }
`;

export const ResultButtonsBottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media ${layoutBelowNoteMediaMax} {
    justify-content: center;
  }
`;

export const ResultCopyButtonLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;
  }
`;

export const ResultSecondaryCtaIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`;

export const ResultSecondaryCtaButton = styled.button`
  box-sizing: border-box;
  width: fit-content;
  margin: 0;
  padding: ${spacingSize12} ${spacingSize24};
  border-radius: ${spacingSize12};
  gap: 0.5rem;
  border: 1px solid #003d5c;
  background-color: #ffffff;
  color: #003d5c;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.15s ease, color 0.15s ease;

  @media ${layoutMobileMediaMax} {
    font-size: 0.9375rem;
  }

  &:hover {
    background-color: #003d5c;
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #003d5c;
    outline-offset: 2px;
  }

  @media ${layoutBelowNoteMediaMax} {
    padding: 0;
    border: none;
    border-radius: 0;
    background: transparent;
    text-decoration: none;
    font-size: 0.9375rem;
    line-height: 1.4;

    &:hover {
      background: transparent;
      color: #005a87;
      text-decoration: none;
    }

    &:focus-visible {
      border-radius: 2px;
    }

    ${ResultSecondaryCtaIcon} {
      display: none;
    }
  }
`;

export const ResultSecondaryCtaHint = styled.p`
  width: 100%;
  margin: 0;
  font-size: 16px;
  line-height: 140%;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  color: #002a3d;
  text-align: right;

  @media ${layoutBelowNoteMediaMax} {
    text-align: center;
  }

  @media ${layoutMobileMediaMax} {
    font-size: 0.875rem;
  }

  strong {
    font-weight: 700;
  }
`;

export const ResultPromoBox = styled.section`
  margin-top: ${sizeSpacing13};
  padding: ${sizeSpacing05};
  background: #ffffff;
  border: 1px solid #7befff;
  border-radius: ${sizeSpacing04};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ResultPromoTitle = styled.h3`
  margin: 0;
  font-family: ${fontFamilyDisplay};
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0;
  color: #003d5c;

  @media ${layoutMobileMediaMax} {
    font-size: 1.25rem;
  }
`;

export const ResultPromoText = styled.p`
  margin: 0;
  font-family: ${fontFamilySans};
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${colorTextPrimary};

  @media ${layoutMobileMediaMax} {
    font-size: 0.875rem;
  }

  strong {
    font-weight: 700;
  }
`;

export const ResultPromoLink = styled.a`
  color: #005a87;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #003d5c;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const ResultPageIcon = styled('img')`
  position: absolute;
  /* Precisa ficar acima do fundo do card. */
  z-index: 1;
  display: block;
  margin: 0;
  object-fit: contain;
  pointer-events: none;
  transform: rotate(-12.76deg);
  transition:
    right 220ms ease,
    top 220ms ease,
    width 220ms ease,
    height 220ms ease;

  transform-origin: right top;
  top: 0;
  /* Leve “vazão” pra fora do card. */
  right: -8px;
  bottom: auto;
  left: auto;
  width: 64px;
  height: auto;
  aspect-ratio: ${98} / ${99};
  max-width: min(140px, 42vw);

  @media ${layoutMobileMediaMax} {
    width: 93px;
    height: 94px;
    aspect-ratio: 93 / 94;
    top: -22px;
    right: 30px;
  }

  @media ${layoutTabletToBelowNoteMedia} {
    width: 132px;
    aspect-ratio: ${401} / ${405};
    top: -20px;
    right: -8px;
  }

  @media ${layoutNoteToBelowPcMedia} {
    transform-origin: right bottom;
    top: 150px;
    right: -139px;
    bottom: auto;
    width: 280px;
    height: auto;
    aspect-ratio: ${401} / ${405};
    max-width: min(401px, 90vw);
  }

  @media (min-width: ${layoutBreakpointPc}) {
    transform-origin: right bottom;
    top: 123px;
    right: -167px;
    bottom: auto;
    width: 401px;
    height: auto;
    aspect-ratio: ${401} / ${405};
    max-width: min(401px, 90vw);
  }
`;
