import React from 'react'
import { StepComponentProps, Task } from '../types'

export const ConfirmTaskStep: React.FC<StepComponentProps> = ({ controller }) => {
  const task = controller.data.task as Task | undefined

  if (!task) {
    return (
      <>
        <h4 className="checkout-modal__body__header">Bevestiging</h4>
        <div className="checkout-modal__body__content">
          <p>Geen taak geselecteerd. Ga terug en kies een taak.</p>
        </div>
        <hr className="checkout-modal__divider" />
      </>
    )
  }

  const proceed = () => {
    controller.setData({ taskConfirmed: true })
    controller.go('summary')
  }

  return (
    <>
      <h4 className="checkout-modal__body__header">Bevestiging</h4>
      <div className="checkout-modal__body__content">
        <div className="checkout-modal__task-details">
          <div
            className="checkout-modal__task-card checkout-modal__task-details__card"
            style={task.image ? { backgroundImage: `url(${task.image})` } : undefined}
          >
            <div className="checkout-modal__task-card__overlay">
              <div className="checkout-modal__task-card__header">
                <span className="checkout-modal__task-card__title">{task.name}</span>
              </div>
              <div className="checkout-modal__task-card__meta">
                <div>{task.event}</div>
                <div>{task.date}</div>
                {task.time && <div>{task.time}</div>}
              </div>
              <button
                type="button"
                className="checkout-modal__task-card__back checkout-modal__button-primary"
                onClick={() => controller.go('tasksOverview')}
                style={{ marginTop: 'auto' }}
              >
                Toch niet dit?
              </button>
            </div>
          </div>

          <div className="checkout-modal__task-details__info">
            <span className="checkout-modal__task-details__label">Taak</span>
            <span className="checkout-modal__task-details__value">{task.name}</span>
            <span className="checkout-modal__task-details__label">Event</span>
            <span className="checkout-modal__task-details__value">{task.event}</span>
            <span className="checkout-modal__task-details__label">Datum</span>
            <span className="checkout-modal__task-details__value">{task.date}</span>
            <span className="checkout-modal__task-details__label">Tijd</span>
            <span className="checkout-modal__task-details__value">{task.time ?? '—'}</span>
          </div>
        </div>
      </div>
      <hr className="checkout-modal__divider" />
      <div className="checkout-modal__body__actions">
        <button
          className="checkout-modal__button-primary checkout-modal__actions-center"
          onClick={proceed}
        >
          Bevestig
        </button>
      </div>
    </>
  )
}