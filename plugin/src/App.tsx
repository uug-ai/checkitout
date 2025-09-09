import './App.css'
import { PluginButton } from './Button'

function App() {

  return (
    <>
      <hr />
      <h2>Plugin Demo</h2>
      <PluginButton modalTitle="My Plugin Modal">
        <p>This is placeholder content rendered inside the modal.</p>
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </PluginButton>
    </>
  )
}

export default App
