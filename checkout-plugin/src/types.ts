import React from 'react'

export interface StepsController {
  current: string
  history: string[]
  go: (id: string) => void
  back: () => void
  close: () => void
  setData: (partial: Record<string, unknown>) => void
  data: Record<string, unknown>
}

export interface StepComponentProps {
  controller: StepsController
  data: Record<string, unknown>
}

export interface StepDefinition {
  id: string
  title: string
  component: React.FC<StepComponentProps>
}