import React, { useState, useMemo } from 'react'
import { StepComponentProps, Task } from '../types'

import afwasserImg from '../assets/tasks/afwasser.png'
import lichttechnicusImg from '../assets/tasks/lichttechnicus.png'
import onthaalImg from '../assets/tasks/onthaal.png'

export const tasks: Task[] = [
  {
    name: 'Afwasser',
    event: 'Melle op zwier',
    description: 'Help mee in de keuken door af te wassen en de keuken schoon te houden.',
    location: 'Melle',
    date: '2025-10-23',
    time: '18:00 - 22:00',
    image: afwasserImg,
  },
  {
    name: 'Lichttechnicus',
    event: 'Rijvers festival',
    description: 'Zorg voor de juiste verlichting tijdens het evenement en help bij het opzetten van de lichtinstallaties.',
    location: 'Lievegem',
    date: '2026-08-15',
    time: '16:00 - 23:30',
    image: lichttechnicusImg,
  },
  {
    name: 'Onthaalmedewerker',
    event: 'Melle op zwier',
    description: 'Zorg voor een warm welkom van de bezoekers en help hen met hun vragen.',
    location: 'Melle',
    date: '2025-10-23',
    time: '17:30 - 21:00',
    image: onthaalImg,
  },
  {
    name: 'Beveiligingsmedewerker',
    event: 'OdeGand',
    description: 'Zorg voor de veiligheid van de bezoekers door toezicht te houden en hulp te bieden waar nodig.',
    location: 'Gent',
    date: '2025-09-13',
    time: '14:00 - 20:00',
  },
  {
    name: 'Opbouw medewerker',
    event: 'Melle op zwier',
    description: 'Help mee met het opbouwen van het evenement door tafels, stoelen en decoraties te plaatsen.',
    location: 'Melle',
    date: '2025-10-22',
    time: '09:00 - 13:00',
  },
  {
    name: 'Barvrijwilliger',
    event: 'Melle op zwier',
    description: 'Help mee achter de bar door drankjes te serveren en bestellingen op te nemen.',
    location: 'Melle',
    date: '2025-10-23',
    time: '18:00 - 23:00',
  },
]

const VISIBLE = 3

export const TasksOverviewStep: React.FC<StepComponentProps> = ({ controller }) => {
  const [start, setStart] = useState(0)          // index of first visible card
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const visibleIndices = useMemo(
    () => Array.from({ length: Math.min(VISIBLE, tasks.length) }, (_, i) => (start + i) % tasks.length),
    [start]
  )

  const prev = () => {
    if (tasks.length <= VISIBLE) return
    setStart(s => (s - 1 + tasks.length) % tasks.length)
  }

  const next = () => {
    if (tasks.length <= VISIBLE) return
    setStart(s => (s + 1) % tasks.length)
  }

  const selectTask = (idx: number) => {
    setSelectedIndex(idx)
  }

  const submit = () => {
    if (selectedIndex == null) return
    controller.setData({ task: tasks[selectedIndex] })
    controller.go('confirmTask')
  }

  return (
    <>
      <h4 className="checkout-modal__body__header">
        Selecteer een vrijwilligerstaak
      </h4>
      <div className="checkout-modal__body__content">
        <p>
          Op basis van je voorkeuren hebben we de volgende vrijwilligerstaken voor je gevonden. Kies er een uit om verder te gaan.
        </p>

        <div className="checkout-modal__carousel">
          <button
            type="button"
            className="checkout-modal__carousel-nav checkout-modal__carousel-nav--prev"
            onClick={prev}
            disabled={tasks.length <= VISIBLE}
            aria-label="Vorige"
          >
            ‹
          </button>

            <div className="checkout-modal__carousel-track" role="list">
              {visibleIndices.map(idx => {
                const t = tasks[idx]
                const selected = selectedIndex === idx
                return (
                  <div
                    key={t.name + idx}
                    role="listitem"
                    className={`checkout-modal__task-card ${selected ? 'checkout-modal__task-card--selected' : ''}`}
                    style={t.image ? { backgroundImage: `url(${t.image})` } : undefined}
                  >
                    <div className="checkout-modal__task-card__overlay">
                      <div className="checkout-modal__task-card__header">
                        <span className="checkout-modal__task-card__title">{t.name}</span>
                      </div>
                      <div className="checkout-modal__task-card__meta">
                        <div>{t.event}</div>
                        <div>{t.date}</div>
                      </div>
                      <button
                        type="button"
                        className="checkout-modal__task-card__select checkout-modal__button-primary"
                        onClick={() => selectTask(idx)}
                        aria-pressed={selected}
                      >
                        {selected ? 'Geselecteerd' : 'Selecteer'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

          <button
            type="button"
            className="checkout-modal__carousel-nav checkout-modal__carousel-nav--next"
            onClick={next}
            disabled={tasks.length <= VISIBLE}
            aria-label="Volgende"
          >
            ›
          </button>
        </div>
      </div>

      <hr className="checkout-modal__divider" />

      <div className="checkout-modal__body__actions">
        <button
          className={`checkout-modal__button-primary checkout-modal__actions-center ${selectedIndex == null ? 'checkout-modal__button-disabled' : ''}`}
          onClick={submit}
          disabled={selectedIndex == null}
        >
          Volgende
        </button>
      </div>
    </>
  )
}