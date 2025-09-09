import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Modal } from "./Modal";
import "./index.css"; // ensure modal styles are included

export function initPlugin(targetClass: string = "checkout-plugin") {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  const ModalWrapper: React.FC = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const fields = document.querySelectorAll<HTMLElement>(`.${targetClass}`);
      const handleClick = () => setOpen(true);
      fields.forEach(f => f.addEventListener("click", handleClick));
      return () => fields.forEach(f => f.removeEventListener("click", handleClick));
    }, []);

    return <Modal open={open} onClose={() => setOpen(false)} title="Checkout Plugin" />;
  };

  root.render(<ModalWrapper />);
}

export default { initPlugin };