import React, { useState } from 'react'
import { StepComponentProps } from '../types'

export const LoginStep: React.FC<StepComponentProps> = ({ controller }) => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  const disabled = !email || !pw

  const submit = () => {
    // fake auth
    controller.setData({ userAuthenticated: true, email })
    controller.go('profileSkills')
  }

  return (
    <>
      <h4 className="checkout-modal__body__header">
        Login      
      </h4>
      <div className="checkout-modal__body__content">
        <label>
          <input className="checkout-modal--input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%' }} />
        </label>
        <label>
          <input className="checkout-modal--input" placeholder="Password" type="password" value={pw} onChange={e => setPw(e.target.value)} style={{ width: '100%' }} />
        </label>
      </div>
      <hr className="checkout-modal__divider" />
      <div className="checkout-modal__body__actions">
        <button
          className={`checkout-modal__button-secondary checkout-modal__actions-left ${disabled ? 'checkout-modal__button-disabled' : ''}`}
          onClick={submit}
          disabled={disabled}
        >
          Login
        </button>        
        <span>of</span>
        <button className="checkout-modal__button-primary" onClick={() => controller.go('register')}>Registreer</button>
      </div>
    </>
  )
}