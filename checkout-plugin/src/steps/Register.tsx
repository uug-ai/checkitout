import React, { useState } from 'react'
import { StepComponentProps } from '../types'

export const RegisterStep: React.FC<StepComponentProps> = ({ controller }) => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [name, setName] = useState('')

  const submit = () => {
    controller.setData({ userRegistered: true, email, name })
    // after registration you might want to auto-login or go to login:
    controller.go('login')
  }

  return (
    <div>
      <h4 style={{ marginTop: 0 }}>Register</h4>
      <label style={{ display: 'block', marginBottom: '.5rem' }}>
        <span>Name</span><br />
        <input value={name} onChange={e => setName(e.target.value)} style={{ width: '100%' }} />
      </label>
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
        <button onClick={() => controller.go('login')}>Have an account?</button>
        <button onClick={submit} disabled={!email || !pw || !name}>Register</button>
      </div>
    </div>
  )
}