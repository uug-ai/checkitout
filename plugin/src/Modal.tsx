import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
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

  return ReactDOM.createPortal(
    <div className="plugin-modal__backdrop" role="presentation" onClick={onClose}>
      <div
        className="plugin-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="plugin-modal__header">
          <h2>{title}</h2>
          <button className="plugin-modal__close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="plugin-modal__body">
          {children ?? <p>Placeholder plugin content goes here.</p>}
        </div>
      </div>
    </div>,
    document.body
  )
}