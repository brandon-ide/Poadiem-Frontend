import { useState } from 'react'
import './App.css'
import Form from './pages/components/form'
import '../src/pages/components/form.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="logoWithSubtitle">
      <h1 className="logo">poadiem</h1>
      <p className="subtitle">
        your <strong>personal</strong> micro travel guide
      </p>
      </div>
      <Form />
    </>
  )
}

export default App
