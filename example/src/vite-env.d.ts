/// <reference types="vite/client" />

declare global {
	interface Window {
		CheckoutPlugin?: {
			initPlugin: (targetClass?: string) => void
		}
	}
}

export {}
