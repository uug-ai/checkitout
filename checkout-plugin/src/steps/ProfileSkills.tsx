import React, { useState } from 'react'
import { StepComponentProps } from '../types'

const SKILLS = ['Organiseren','Communicatie','Logistiek','Design','Catering','Techniek','Promo','Planning']

export const ProfileSkillsStep: React.FC<StepComponentProps> = ({ controller }) => {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (skill: string) => {
    setSelected(s =>
      s.includes(skill) ? s.filter(x => x !== skill) : [...s, skill]
    )
  }

  const next = () => {
    controller.setData({ skills: selected })
    controller.go('taskOverview')
  }

  return (
   <>
      <h4 className="checkout-modal__body__header">
        Jouw skills
      </h4>
      <div className="checkout-modal__body__content">
        <p>
          Selecteer wat je graag doet
        </p>
            <div className="checkout-modal__body__skill-select">
          {SKILLS.map(skill => {
            const active = selected.includes(skill)
            return (
              <button
                key={skill}
                type="button"
                className={`checkout-modal__skill-btn ${active ? 'checkout-modal__skill-btn--selected' : ''}`}
                onClick={() => toggle(skill)}
                aria-pressed={active}
              >
                {skill}
              </button>
            )
          })}
        </div>
      </div>
      <hr className="checkout-modal__divider" />
         <div className="checkout-modal__body__actions">
        <button
          className="checkout-modal__button-primary checkout-modal__actions-center"
          onClick={next}
          disabled={!selected.length}
        >
          Volgende
        </button>
      </div>
    </>
  )
}