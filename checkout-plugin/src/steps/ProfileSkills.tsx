import React from 'react'
import { StepComponentProps } from '../types'

export const ProfileSkillsStep: React.FC<StepComponentProps> = ({ controller }) => {
  return (
    <div>
      <h4 style={{ marginTop: 0 }}>ProfileSkillsStep</h4>
      <p>Please choose how you want to continue.</p>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button onClick={() => controller.go('tasksOverview')}>Next</button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => controller.close()}>Close</button>
      </div>
    </div>
  )
}