import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { WelcomeStep } from './steps/Welcome'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title = 'Plugin Modal', children }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const portalTarget = document.getElementById('__checkout-plugin-root') || document.body

  return createPortal(
    <div className="checkout-modal__backdrop" role="presentation" onClick={onClose}>
      <div
        className="checkout-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="checkout-modal__header">
          <button className="checkout-modal__close" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <div className="checkout-modal__body">
          {children}
        </div>
        <div className="checkout-modal__footer">
          Muntuit
        </div>
      </div>
    </div>,
    portalTarget
  )
}