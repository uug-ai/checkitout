// React Fast Refresh safety stubs: ensure host environments without refresh runtime don't error
// If the bundler strips them they remain harmless. Needed when UMD consumed by a dev Vite app.
// (Vite may expect these globals if transformation happened upstream.)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).$RefreshSig$ = (window as any).$RefreshSig$ || (() => (type: unknown) => type);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).$RefreshReg$ = (window as any).$RefreshReg$ || (() => { /* noop */ });
}

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Modal } from "./Modal";
import "./index.css";

declare global {
  interface Window {
    __checkoutPluginInitialized?: boolean;
    __checkoutPluginRoot?: ReturnType<typeof createRoot>;
    __checkoutPluginContainer?: HTMLDivElement;
  }
}

function onDomReady(cb: () => void) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cb, { once: true });
  } else {
    cb();
  }
}

export function initPlugin(targetClass: string = "checkout-plugin") {
  if (window.__checkoutPluginInitialized) return;

  // If body not yet available, wait and retry once DOM is ready
  if (!document.body) {
    onDomReady(() => initPlugin(targetClass));
    return;
  }

  window.__checkoutPluginInitialized = true;

  if (document.getElementById("__checkout-plugin-root")) return;

  const container = document.createElement("div");
  container.id = "__checkout-plugin-root";
  document.body.appendChild(container);
  const root = createRoot(container);
  window.__checkoutPluginRoot = root;
  window.__checkoutPluginContainer = container;

  const ModalWrapper: React.FC = () => {
    const [open, setOpen] = useState(false);

    // Single delegated listener: catches current and future elements
    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const el = e.target as HTMLElement | null;
        if (el && el.closest(`.${targetClass}`)) {
          setOpen(true);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, [targetClass]);

    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Checkout Plugin"
      />
    );
  };

  root.render(<ModalWrapper />);
}

// Auto-init safely (outside React, unaffected by StrictMode)
if (typeof window !== "undefined") {
  onDomReady(() => initPlugin("checkout-plugin"));
}

export default { initPlugin };