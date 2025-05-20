import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <h1 className="nome-check">Check List</h1>
      <div className="top"><button className='button'>Digite aqui...</button></div>
        <div className="box">
          <div className="mid-box"></div>
          <div className="hug"></div>
        </div>
      </div>
    </>
  )
}

export default App
