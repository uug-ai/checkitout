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

export interface Task {
  name: string,
  event: string,
  date: string,
  time?: string,
  location?: string,
  description?: string,
  image?: string,
  [key: string]: unknown
}