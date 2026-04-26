import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactComponent as ArrowRightIcon } from '../assets/arrow-right.svg';
import {
  LandingFaqAnswer,
  LandingFaqAnswerText,
  LandingFaqCloseAllButton,
  LandingFaqCloseAllIcon,
  LandingFaqInner,
  LandingFaqItem,
  LandingFaqList,
  LandingFaqMain,
  LandingFaqRoot,
  LandingFaqSummary,
  LandingFaqSummaryText,
  LandingFaqTitle,
  LandingFaqToolbar,
} from '../styles/landingFaqSection';

const FAQ_ITEMS: { id: string; question: string; answer: string }[] = [
  {
    id: 'o-que-e',
    question: 'O que é o Gerador de link para WhatsApp?',
    answer:
      'O plano Light não tem tempo de permanência mínima nem multa por cancelamento. Você pode cancelar quando quiser. Ficaremos tristes, mas você pode cancelar a qualquer momento, com poucos cliques. É só entrar no painel de configurações da sua conta e lá você terá essa opção. O cancelamento da sua conta não acontece de forma automática por falta de uso, por isso, se não quiser mais usar sua conta lembre-se de cancelar para que você não pague se não estiver usando.'  
  },
  {
    id: 'onde-usar',
    question: 'Onde posso usar o link do WhatsApp?',
    answer:
     'O seu link de Whatsapp pode ser usado no link da bio das suas redes sociais, em mensagens de email, chats e qualquer que você possa usar para compartilhar o link direto para o seu WhatsApp.'},
  {
    id: 'vantagens',
    question: 'Quais as vantagens de ter um link do seu WhatsApp?',
    answer:
      'O link do WhatsApp permite que você compartilhe o seu contato de WhatsApp de forma prática, com clientes e pessoas interessadas nos seus produtos ou serviços. Dessa forma, você consegue tirar dúvidas, ajudar no processo de compra e estreitar o relacionamento com essas pessoas.',
  },
  {
    id: 'como-gerar',
    question: 'Como gerar link para WhatsApp?',
    answer:
      'Acesse o gerador nesta página, preencha seu número de WhatsApp (com DDD), e-mail e cargo; a mensagem padrão é opcional. Só o número e a mensagem (se houver) entram no link público; e-mail e cargo são usados no envio interno conforme a política de privacidade.',
  },
];

const syncAnyOpen = (root: HTMLDivElement | null): boolean => {
  if (!root) return false;
  return Array.from(root.querySelectorAll<HTMLDetailsElement>('details')).some((d) => d.open);
};

/** Perguntas frequentes; padding igual ao da primeira seção de landing (benefícios). */
export const LandingFaqSection = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [someOpen, setSomeOpen] = useState(false);

  const refreshOpenState = useCallback(() => {
    setSomeOpen(syncAnyOpen(listRef.current));
  }, []);

  useEffect(() => {
    refreshOpenState();
  }, [refreshOpenState]);

  const handleDetailsToggle = useCallback(() => {
    refreshOpenState();
  }, [refreshOpenState]);

  const handleToggleAll = useCallback(() => {
    const root = listRef.current;
    if (!root) return;
    const details = Array.from(root.querySelectorAll<HTMLDetailsElement>('details'));
    const anyOpen = details.some((d) => d.open);
    if (anyOpen) {
      details.forEach((d) => {
        d.open = false;
      });
    } else {
      details.forEach((d) => {
        d.open = true;
      });
    }
    setSomeOpen(syncAnyOpen(root));
  }, []);

  return (
    <LandingFaqRoot aria-labelledby="landing-faq-title">
      <LandingFaqInner>
        <LandingFaqToolbar>
          <LandingFaqCloseAllButton
            type="button"
            onClick={handleToggleAll}
            aria-controls="landing-faq-list"
            aria-expanded={someOpen}
          >
            {someOpen ? 'Fechar todos' : 'Abrir todos'}
            <LandingFaqCloseAllIcon aria-hidden $expanded={someOpen}>
              <ArrowRightIcon width={16} height={16} />
            </LandingFaqCloseAllIcon>
          </LandingFaqCloseAllButton>
        </LandingFaqToolbar>
        <LandingFaqMain>
          <LandingFaqTitle id="landing-faq-title">Perguntas mais comuns</LandingFaqTitle>
          <LandingFaqList id="landing-faq-list" ref={listRef}>
            {FAQ_ITEMS.map(({ id, question, answer }) => (
              <LandingFaqItem key={id} onToggle={handleDetailsToggle}>
                <LandingFaqSummary>
                  <LandingFaqSummaryText>{question}</LandingFaqSummaryText>
                </LandingFaqSummary>
                <LandingFaqAnswer>
                  <LandingFaqAnswerText>{answer}</LandingFaqAnswerText>
                </LandingFaqAnswer>
              </LandingFaqItem>
            ))}
          </LandingFaqList>
        </LandingFaqMain>
      </LandingFaqInner>
    </LandingFaqRoot>
  );
};
