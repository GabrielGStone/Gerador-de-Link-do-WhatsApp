export const fontFamilySans = "'DM Sans', system-ui, sans-serif";

export const fontFamilyDisplay = "'Red Hat Display', system-ui, sans-serif";

export const sizeSpacing01 = '4px';

export const sizeSpacing02 = '8px';

export const sizeSpacing03 = '12px';

export const sizeSpacing04 = '16px';

export const landingPitchTitleMarkBarHeight = '29px';

export const sizeSpacing05 = '1rem';

export const sizeSpacing09 = '2.25rem';

export const sizeSpacing10 = '40px';

export const sizeSpacing10OneHalf = '60px';

export const sizeSpacing11 = '96px';

export const sizeSpacing13 = '72px';

export const sizeSpacing15 = '160px';

export const spacingSize16 = '16px';

export const spacingSize12 = '12px';

export const spacingSize24 = '24px';

export const spacingSize80 = '80px';

export const layoutBreakpointMobile = '375px';
export const layoutBreakpointTablet = '768px';
export const layoutBreakpointNote = '1440px';
export const layoutBreakpointPc = '1920px';

export const layoutViewportMaxMobile = '767px';
export const layoutViewportMaxBelowNote = '1439px';
export const layoutViewportMaxBelowPc = '1919px';

export const layoutMobileMediaMax = `(max-width: ${layoutViewportMaxMobile})`;

export const layoutBelowNoteMediaMax = `(max-width: ${layoutViewportMaxBelowNote})`;

export const layoutTabletToBelowNoteMedia = `(min-width: ${layoutBreakpointTablet}) and (max-width: ${layoutViewportMaxBelowNote})`;

export const layoutNoteToBelowPcMedia = `(min-width: ${layoutBreakpointNote}) and (max-width: ${layoutViewportMaxBelowPc})`;

export const layoutWideContentMin = '1200px';
export const layoutWideContentMax = '1199px';

export const layoutBreakpointLg = '1024px';
export const layoutBreakpointXl = '1280px';

export const layoutLandingIntroColumnMax = 'min(808px, 100%)';

export const formPagePaddingInline = `clamp(${spacingSize16}, calc(${spacingSize16} + (100vw - ${layoutBreakpointMobile}) * 8 / 393), ${spacingSize24})`;

export const layoutSectionPaddingInline = `max(1.5rem, calc(24px + min(24px, max(0px, calc((100vw - ${layoutBreakpointMobile}) * 24 / 393))) + min(32px, max(0px, calc((100vw - ${layoutBreakpointTablet}) * 32 / 672))) + min(156px, max(0px, calc((100vw - ${layoutBreakpointNote}) * 156 / 480)))))`;

export const layoutSectionMaxWidth = '1920px';

export const layoutSectionHorizontalInsetBalanced = `calc((100% - min(100%, ${layoutSectionMaxWidth})) / 2)`;

export const layoutSectionPaddingInlineBalanced = `max(${layoutSectionPaddingInline}, ${layoutSectionHorizontalInsetBalanced})`;
