# Gerador de Link do WhatsApp

Formulário React (TypeScript) com validação, geração de link `wa.me` e envio dos dados para um webhook do **Zapier**.

Este projeto usa **Yarn** como gerenciador de pacotes (`yarn.lock`).

## Configuração do Zapier

1. Copie `.env.example` para `.env` na raiz do projeto.
2. Defina `REACT_APP_ZAPIER_WEBHOOK_URL` com a URL exata do Catch Hook fornecida nos requisitos.
3. Reinicie o servidor de desenvolvimento após alterar o `.env`.

Sem essa variável, o projeto usa um **fallback** (`DEFAULT_ZAPIER_WEBHOOK_URL`) definido em `src/services/zapierService.ts`.
Em ambientes reais, o recomendado é **configurar sempre** o webhook via `.env` (evita enviar dados para um endpoint inesperado).

## Limitações conhecidas (importante para review)

- **Envio browser-only para Zapier (CORS / `no-cors`)**: o POST é feito diretamente do navegador. Para evitar bloqueio de CORS em webhooks do Zapier, a requisição usa `fetch(..., { mode: 'no-cors' })`.
  - **O que isso implica**: o browser não expõe `status`/`body` da resposta (“opaque response”). Então o app **não consegue confirmar** se o Zapier recebeu/processou o payload; ele só consegue detectar falhas do tipo **sem rede / timeout / abort**.
  - **Como o usuário é avisado**: quando ocorre erro de rede/timeout, o formulário mostra um **alerta** (banner com `role="alert"`) acima dos campos.
  - **Solução “de produção”**: colocar um **backend/proxy** (Function/Worker) para fazer o POST server-side e retornar status real ao front.

## Scripts (Yarn)

```bash
yarn install
yarn start
yarn build
```

Equivalente com npm: `npm install`, `npm start`, `npm run build`.
