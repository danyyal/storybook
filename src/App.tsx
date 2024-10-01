import { useState } from 'react'
import './App.css'
import { Button } from './Components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} label={`count is ${count}`} backgroundColor="white" />
      </div>
    </>
  )
}

export default App
