import { DEFAULT_ZAPIER_WEBHOOK_URL, ZapierRequestError, getZapierErrorMessage, sendToZapier } from './zapierService';
import type { ResultData } from '../types';

const sample: ResultData = {
  email: 'a@b.com',
  whatsapp: '(41) 99999-0000',
  mensagem: 'Oi',
  cargo: 'analista_marketing',
  link: 'https://wa.me/5511999990000?text=Oi',
};

describe('zapierService', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = jest.fn().mockResolvedValue({ ok: true });
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (process.env as any).REACT_APP_ZAPIER_WEBHOOK_URL = undefined;
  });

  it('usa a URL do env quando definida', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (process.env as any).REACT_APP_ZAPIER_WEBHOOK_URL = 'https://example.com/webhook';
    await sendToZapier(sample);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/webhook',
      expect.objectContaining({
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: expect.any(String),
        signal: expect.any(Object),
      }),
    );
  });

  it('cai no DEFAULT_ZAPIER_WEBHOOK_URL quando env está vazia', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (process.env as any).REACT_APP_ZAPIER_WEBHOOK_URL = '   ';
    await sendToZapier(sample);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(DEFAULT_ZAPIER_WEBHOOK_URL, expect.any(Object));
  });

  it('envia body como x-www-form-urlencoded (inclui campos essenciais)', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (process.env as any).REACT_APP_ZAPIER_WEBHOOK_URL = 'https://example.com/webhook';
    await sendToZapier(sample);

    const init = (fetch as jest.Mock).mock.calls[0][1] as RequestInit;
    expect(typeof init.body).toBe('string');
    const body = init.body as string;

    // Não depende da ordenação do URLSearchParams
    expect(body).toContain('email=');
    expect(body).toContain(encodeURIComponent(sample.email));
    expect(body).toContain('mensagem=');
    expect(body).toContain(encodeURIComponent(sample.mensagem));
    expect(body).toContain('cargo=');
    expect(body).toContain(encodeURIComponent(sample.cargo));
    expect(body).toContain('link=');
    expect(body).toContain(encodeURIComponent(sample.link));
  });

  it('transforma AbortError em ZapierRequestError com mensagem amigável', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new DOMException('aborted', 'AbortError'));
    const p = sendToZapier(sample);
    await expect(p).rejects.toBeInstanceOf(ZapierRequestError);
    await expect(p).rejects.toThrow(/Tempo de envio esgotado/i);
  });

  it('getZapierErrorMessage retorna message de ZapierRequestError', () => {
    const err = new ZapierRequestError('Falhou', 500);
    expect(getZapierErrorMessage(err)).toBe('Falhou');
  });

  it('getZapierErrorMessage retorna fallback para erros desconhecidos', () => {
    expect(getZapierErrorMessage(new Error('x'))).toMatch(/Não foi possível enviar/i);
  });
});

