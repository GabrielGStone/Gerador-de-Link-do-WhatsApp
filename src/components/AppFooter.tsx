import { AppFooterInner, AppFooterLink, AppFooterRoot } from '../styles/appFooter';

const PRIVACY_POLICY_URL = 'https://legal.rdstation.com/pt/privacy-policy/';

export const AppFooter = () => (
  <AppFooterRoot>
    <AppFooterInner>
      <AppFooterLink href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
        Política de Privacidade
      </AppFooterLink>
      <span>© 2023 Resultados Digitais</span>
    </AppFooterInner>
  </AppFooterRoot>
);
