import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReadAll from './components/ReadAll/ReadAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReadAll  />
    </div>
  )
}

export default App
