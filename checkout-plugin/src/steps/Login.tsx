import React, { useState } from 'react'
import { StepComponentProps } from '../types'

export const LoginStep: React.FC<StepComponentProps> = ({ controller }) => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  const submit = () => {
    // fake auth
    controller.setData({ userAuthenticated: true, email })
    controller.go('profileInfo')
  }

  return (
    <div>
      <h4 style={{ marginTop: 0 }}>Login</h4>
      <label style={{ display: 'block', marginBottom: '.5rem' }}>
        <span>Email</span><br />
        <input value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '.75rem' }}>
        <span>Password</span><br />
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} style={{ width: '100%' }} />
      </label>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button onClick={() => controller.back()}>Back</button>
        <button onClick={() => controller.go('register')}>Need an account?</button>
        <button onClick={submit} disabled={!email || !pw}>Login</button>
      </div>
    </div>
  )
}