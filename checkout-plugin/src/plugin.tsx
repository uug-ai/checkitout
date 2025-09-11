// React Fast Refresh safety stubs: ensure host environments without refresh runtime don't error
// If the bundler strips them they remain harmless. Needed when UMD consumed by a dev Vite app.
// (Vite may expect these globals if transformation happened upstream.)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).$RefreshSig$ = (window as any).$RefreshSig$ || (() => (type: unknown) => type);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).$RefreshReg$ = (window as any).$RefreshReg$ || (() => { /* noop */ });
}
import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Modal } from './Modal'
import './index.css'
import { StepDefinition, StepsController } from './types'
import { WelcomeStep } from './steps/Welcome'
import { LoginStep } from './steps/Login'
import { RegisterStep } from './steps/Register'
import { ProfileInfoStep } from './steps/ProfileInfo'
import { ProfileSkillsStep } from './steps/ProfileSkills'
import { TasksOverviewStep } from './steps/TasksOverview'
import { TaskDetailsStep } from './steps/TaskDetails'
import { ConfirmTaskStep } from './steps/ConfirmTask'

declare global {
  interface Window {
    __checkoutPluginInitialized?: boolean
  }
}

function onDomReady(cb: () => void) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cb, { once: true });
  } else {
    cb();
  }
}

export function initPlugin(triggerClass: string = 'checkout-plugin') {
  if (window.__checkoutPluginInitialized) return;
  if (typeof document === 'undefined') return; // SSR safety

  if (!document.body) {
    onDomReady(() => initPlugin(triggerClass));
    return;
  }

  window.__checkoutPluginInitialized = true;

  let container = document.getElementById('__checkout-plugin-root');
  if (!container) {
    container = document.createElement('div');
    container.id = '__checkout-plugin-root';
    document.body.appendChild(container);
  }

  const steps: Record<string, StepDefinition> = {
    welcome: { id: 'welcome', title: 'Welcome', component: WelcomeStep },
    login: { id: 'login', title: 'Login', component: LoginStep },
    register: { id: 'register', title: 'Register', component: RegisterStep },
    profileInfo: { id: 'profileInfo', title: 'Profile info', component: ProfileInfoStep},
    profileSkills: { id: 'profileSkills', title: 'Profile skills', component: ProfileSkillsStep},
    tasksOverview: { id: 'tasksOverview', title: 'Tasks overview', component: TasksOverviewStep},
    taskDetails: { id: 'taskDetails', title: 'Task details', component: TaskDetailsStep},
    confirmTask: { id: 'confirmTask', title: 'Confirm Task', component: ConfirmTaskStep},
  }

  const Wrapper: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState('welcome')
    const [history, setHistory] = useState<string[]>([])
    const [data, setData] = useState<Record<string, unknown>>({})

    useEffect(() => {
      const onClick = (e: MouseEvent) => {
        const el = e.target as HTMLElement | null
        if (el?.closest('.' + triggerClass)) {
          setCurrent('welcome')
            setHistory([])
          setOpen(true)
        }
      }
      document.addEventListener('click', onClick)
      return () => document.removeEventListener('click', onClick)
    }, [])

    const go = (id: string) => {
      if (!steps[id]) return
      setHistory(h => [...h, current])
      setCurrent(id)
    }

    const back = () => {
      setHistory(h => {
        if (!h.length) return h
        const clone = [...h]
        const prev = clone.pop()!
        setCurrent(prev)
        return clone
      })
    }

    const controller: StepsController = {
      current,
      history,
      go,
      back,
      close: () => setOpen(false),
      setData: (partial) => setData(d => ({ ...d, ...partial })),
      data
    }

    const Active = steps[current].component
    return (
      <Modal open={open} onClose={() => setOpen(false)} title={steps[current].title}>
        <Active controller={controller} data={data} />
      </Modal>
    )
  }

  createRoot(container).render(<Wrapper />)
}

if (typeof window !== 'undefined') {
  // Auto-init default trigger
  initPlugin('checkout-plugin')
}

export default { initPlugin }