import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title = 'Plugin Modal', children }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="plugin-modal__backdrop" role="presentation" onClick={onClose}>
      <div
        className="plugin-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="plugin-modal__header">
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h3>
          <button
            className="plugin-modal__close"
            aria-label="Close"
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          >
            ×
          </button>
        </div>
        <div className="plugin-modal__body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}