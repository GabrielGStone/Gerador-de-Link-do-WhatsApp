import { act, renderHook, waitFor } from '@testing-library/react';
import type { FormData } from '../types';
import { useLeadSubmission } from './useLeadSubmission';

jest.mock('../services/zapierService', () => {
  const actual = jest.requireActual('../services/zapierService') as typeof import('../services/zapierService');
  return {
    __esModule: true,
    ...actual,
    sendToZapier: jest.fn(),
  };
});

const form: FormData = {
  email: '  a@b.com  ',
  whatsapp: ' (11) 99999-0000 ',
  mensagem: ' Oi ',
  cargo: 'analista_marketing',
};

describe('useLeadSubmission', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('gera payload, envia ao Zapier e retorna ResultData', async () => {
    const { result } = renderHook(() => useLeadSubmission());

    let payload: Awaited<ReturnType<typeof result.current.submit>> | null = null;
    await act(async () => {
      payload = await result.current.submit(form);
    });

    expect(payload!).not.toBeNull();
    expect(payload!).toEqual({
      email: 'a@b.com',
      whatsapp: '(11) 99999-0000',
      mensagem: 'Oi',
      cargo: 'analista_marketing',
      link: 'https://wa.me/5511999990000?text=Oi',
    });
  });

  it('exponibiliza submitError quando sendToZapier falha', async () => {
    const { sendToZapier } = await import('../services/zapierService');
    (sendToZapier as jest.Mock).mockRejectedValueOnce(new Error('boom'));

    const { result } = renderHook(() => useLeadSubmission());
    await act(async () => {
      await result.current.submit(form);
    });

    await waitFor(() => {
      // Sem backend, a mensagem é genérica (vinda do getZapierErrorMessage real)
      expect(result.current.submitError).toMatch(/Não foi possível enviar|Tente novamente/i);
    });
  });

  it('clearSubmitError limpa o erro', async () => {
    const { sendToZapier } = await import('../services/zapierService');
    (sendToZapier as jest.Mock).mockRejectedValueOnce(new Error('boom'));

    const { result } = renderHook(() => useLeadSubmission());
    await act(async () => {
      await result.current.submit(form);
    });
    await waitFor(() => expect(result.current.submitError).not.toBeNull());

    act(() => {
      result.current.clearSubmitError();
    });
    await waitFor(() => expect(result.current.submitError).toBeNull());
  });

  it('isSubmitting fica true durante o submit e volta a false no fim', async () => {
    const { sendToZapier } = await import('../services/zapierService');
    (sendToZapier as jest.Mock).mockImplementationOnce(
      () => new Promise<void>((resolve) => window.setTimeout(resolve, 10)),
    );

    jest.useFakeTimers();
    const { result } = renderHook(() => useLeadSubmission());

    let p!: Promise<unknown>;
    act(() => {
      p = result.current.submit(form);
    });

    await waitFor(() => expect(result.current.isSubmitting).toBe(true));
    act(() => {
      jest.advanceTimersByTime(10);
    });
    await act(async () => {
      await p;
    });
    await waitFor(() => expect(result.current.isSubmitting).toBe(false));

    jest.useRealTimers();
  });
});

