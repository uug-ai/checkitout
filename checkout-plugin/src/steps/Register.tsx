import React, { useState } from 'react'
import { StepComponentProps } from '../types'

export const RegisterStep: React.FC<StepComponentProps> = ({ controller }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')

  const passwordsMismatch = pw && pw2 && pw !== pw2
  const disabled = !name || !email || !pw || !pw2 || passwordsMismatch


  const submit = () => {
    controller.setData({ userRegistered: true, email, name })
    controller.go('profileInfo')
  }

  return (
   <>
      <h4 className="checkout-modal__body__header">
        Registreer
      </h4>
      <div className="checkout-modal__body__content">
        <div className="checkout-modal__body__form">
          <div className="checkout-modal--form-row">
            <label>
              <input
                className="checkout-modal--input"
                placeholder="Naam"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              <input
                className="checkout-modal--input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="checkout-modal--form-row">
            <label>
              <input
                className="checkout-modal--input"
                placeholder="Wachtwoord"
                type="password"
                value={pw}
                onChange={e => setPw(e.target.value)}
              />
            </label>
              <label>
                <input
                  className="checkout-modal--input"
                  placeholder="Herhaal wachtwoord"
                  type="password"
                  value={pw2}
                  onChange={e => setPw2(e.target.value)}
                />
              </label>
            </div>
        </div>
        {passwordsMismatch && (
          <div style={{ color: '#d33', fontSize: '.75rem', marginTop: '.5rem' }}>
            Wachtwoorden komen niet overeen.
          </div>
        )}
      </div>
      <hr className="checkout-modal__divider" />
      <div className="checkout-modal__body__actions">
        <button
          className="checkout-modal__button-primary checkout-modal__actions-left"
          onClick={() => controller.go('login')}
        >
          Login
        </button>
        <span className="checkout-modal__actions-center">of</span>
        <button
          className={`checkout-modal__button-secondary checkout-modal__actions-right ${disabled ? 'checkout-modal__button-disabled' : ''}`}
          onClick={submit}
        >
          Registreer
        </button>
      </div>
    </>
  )
}