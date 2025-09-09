import React, { useState } from 'react'
import { Modal } from './Modal'

interface PluginButtonProps {
  label?: string
  modalTitle?: string
  children?: React.ReactNode
}

export const PluginButton: React.FC<PluginButtonProps> = ({
  label = 'Open Plugin Modal',
  modalTitle,
  children
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>{label}</button>
      <Modal open={open} onClose={() => setOpen(false)} title={modalTitle}>
        {children}
      </Modal>
    </>
  )
}