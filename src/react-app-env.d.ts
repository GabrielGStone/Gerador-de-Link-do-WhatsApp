/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_ZAPIER_WEBHOOK_URL?: string;
  }
}
