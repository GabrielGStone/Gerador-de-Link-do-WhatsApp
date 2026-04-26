import { useCallback, useState } from 'react';
import type { FormData, ResultData } from './types';
import { FormPage } from './pages/FormPage';
import { ResultPage } from './pages/ResultPage';
import { useLeadSubmission } from './hooks/useLeadSubmission';
import { Header } from './components/Header';
import { LandingAutoMessagesSection } from './components/LandingAutoMessagesSection';
import { LandingExamplesSection } from './components/LandingExamplesSection';
import { LandingFaqSection } from './components/LandingFaqSection';
import { LandingBenefitsSection } from './components/LandingBenefitsSection';
import { LandingPitchSection } from './components/LandingPitchSection';
import { AppFooter } from './components/AppFooter';
import { AppMain, AppShell, FormPageContainer } from './styles/pageLayout';

type Screen = 'form' | 'result';

const App = () => {
  const [screen, setScreen] = useState<Screen>('form');
  const [result, setResult] = useState<ResultData | null>(null);
  const [formMountKey, setFormMountKey] = useState(0);
  const { submit, isSubmitting, submitError, clearSubmitError } = useLeadSubmission();

  const handleFormSubmit = useCallback(
    async (data: FormData) => {
      const payload = await submit(data);
      if (payload !== null) {
        setResult(payload);
        setScreen('result');
      }
    },
    [submit],
  );

  const handleReset = useCallback(() => {
    setResult(null);
    setScreen('form');
    setFormMountKey((k) => k + 1);
    clearSubmitError();
  }, [clearSubmitError]);

  return (
    <AppShell>
      <Header />
      <AppMain>
        <FormPageContainer>
          {screen === 'form' ? (
            <FormPage
              key={formMountKey}
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
              submitError={submitError}
              onClearSubmitError={clearSubmitError}
            />
          ) : null}
          {screen === 'result' && result !== null ? <ResultPage data={result} onReset={handleReset} /> : null}
        </FormPageContainer>
        {screen === 'form' ? (
          <>
            <LandingBenefitsSection />
            <LandingPitchSection />
            <LandingAutoMessagesSection />
            <LandingExamplesSection />
            <LandingFaqSection />
          </>
        ) : null}
      </AppMain>
      <AppFooter />
    </AppShell>
  );
};

export default App;
