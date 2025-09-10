import React from 'react'
import { StepComponentProps } from '../types'

export const WelcomeStep: React.FC<StepComponentProps> = ({ controller }) => {
  return (
    <>
      <h4 className="checkout-modal__body__header">
        Verdien jouw gratis ticket
      </h4>
      <div className="checkout-modal__body__content">
        <p>
          Muntuit versterkt buurten en steden door mensen samen te brengen rond lokaal vrijwilligerswerk. Met het Urbian puntensysteem spaar je punten door je tijd en talent in te zetten in je community. Die punten kan je vervolgens omruilen voor een gratis ticket naar dit evenement.  Log in of maak een account aan en start meteen met sparen!
        </p>
      </div>
      <hr className="checkout-modal__divider" />
      <div className="checkout-modal__body__actions">
        <button className="checkout-modal__button-secondary checkout-modal__actions-left" onClick={() => controller.go('login')}>Login</button>
        <span className="checkout-modal__actions-center">of</span>
        <button className="checkout-modal__button-primary checkout-modal__actions-right" onClick={() => controller.go('register')}>Registreer</button>
      </div>
    </>
  )
}