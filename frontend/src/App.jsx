import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReadAll from './components/ReadAll/ReadAll'
import Cards from './components/cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReadAll  />
      <Cards />
    </div>
  )
}

export default App
