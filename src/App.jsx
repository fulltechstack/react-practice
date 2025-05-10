import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal } from 'react-dom'

function App() {
  const testPortal = () => {
    return createPortal(<div>This is test</div>, document.getElementById('root2'));

  }

  return (
    <>
      {testPortal()}
    </>
  )
}

export default App
