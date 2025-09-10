import React from 'react'
import { StepComponentProps } from '../types'

export const WelcomeStep: React.FC<StepComponentProps> = ({ controller }) => {
  return (
    <>
      <h4 className="checkout-modal__body__header" style={{ marginTop: 0 }}>
        Verdien jouw gratis ticket
      </h4>
      <p className="checkout-modal__body__body">
        Muntuit versterkt buurten en steden door mensen samen te brengen rond lokaal vrijwilligerswerk. Met het Urbian puntensysteem spaar je punten door je tijd en talent in te zetten in je community. Die punten kan je vervolgens omruilen voor een gratis ticket naar dit evenement.  Log in of maak een account aan en start meteen met sparen!
      </p>
      <hr className="checkout-modal__divider" />
      <div className="checkout-modal__body__footer" style={{ display: 'flex', gap: '.5rem' }}>
        <button className="checkout-modal__button-secondary" onClick={() => controller.go('login')}>Login</button>
        <button className="checkout-modal__button-primary" onClick={() => controller.go('register')}>Registreer</button>
      </div>
    </>
  )
}