import React from 'react'
import { StepComponentProps } from '../types'

export const ProfileInfoStep: React.FC<StepComponentProps> = ({ controller }) => {
  return (
    <>
      <h4 className="checkout-modal__body__header">
        Jouw profiel
      </h4>
      <div className="checkout-modal__body__content">
        <p>
          We hebben nog wat bijkomende informatie nodig over jou
        </p>
        <textarea
          className="checkout-modal__textarea"
          placeholder="Vertel wat meer over jezelf..."
          rows={5}
          wrap="soft"
        />
      </div>
      <hr className="checkout-modal__divider" />
         <div className="checkout-modal__body__actions">
        <button
          className="checkout-modal__button-primary checkout-modal__actions-center"
          onClick={() => controller.go('profileSkills')}
        >
          Volgende
        </button>
      </div>
    </>
  )
}