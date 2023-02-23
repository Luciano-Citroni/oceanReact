import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReadAll from './components/ReadAll/ReadAll'
import Header from './components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ReadAll  />
    </div>
  )
}

export default App
