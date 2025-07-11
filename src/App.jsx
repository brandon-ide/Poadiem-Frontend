import './App.css'
import Form from './pages/components/form'
import '../src/pages/components/form.css'

function App() {

  return (
    <>
    <img src="src/assets/clouds.png" className="cloudsOne" alt="clouds" />
    <img src="src/assets/clouds.png" className="cloudsTwo" alt="clouds" />
    <img src="src/assets/car.png" className="car" alt="car" />
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
