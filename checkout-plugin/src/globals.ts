// Runtime-noop module that only exists so TypeScript emits a declaration file
export {};

declare global {
  interface Window {
    CheckoutPlugin?: {
      initPlugin: (triggerClass?: string) => void;
      open?: () => void;
    };
    CheckoutPluginAutoInit?: boolean;
  }
}
