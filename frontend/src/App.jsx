import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReadAll from './components/ReadAll/ReadAll'
import Header from './components/Header/Header'
import ReadById from './components/ReadById/ReadById'

/*
tecnologias: React JS; Criação de componente; UseState; UseEffect
criar um componente readbyid
dentro do componente, realizar uma requisicao para o endpoint de read by id no backend
pegar as informações do backend e enviar para o componente card


pode ocultar o readall para realizar o exercio
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      {/* <ReadAll  /> */}
      <ReadById />
    </div>
  )
}

export default App
