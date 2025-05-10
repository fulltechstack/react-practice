import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal } from 'react-dom'
import UseEffectDemo from './demos/UseEffectDemo'

function App() {
  const testPortal = () => {
    return createPortal(<div>This is test</div>, document.getElementById('root2'));
  }

  let [count, setCount] = useState(0);

  const clickCountHandler = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      {testPortal()}

      {count}
      <button onClick={clickCountHandler}>Increase</button>

      <UseEffectDemo></UseEffectDemo>
    </>
  )
}

export default App
