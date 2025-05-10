import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPortal } from 'react-dom'
import UseEffectDemo from './demos/UseEffectDemo'
import UseThemeDemo from './demos/UseThemeDemo'
import ThemeContext from './context/ThemeContext'

function App() {
  const testPortal = () => {
    return createPortal(<div>This is test</div>, document.getElementById('root2'));
  }

  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState('light');


  const clickCountHandler = () => {
    setCount(prev => prev + 1);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ background: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black' }}>
        {testPortal()}

        {count}
        <button onClick={clickCountHandler}>Increase</button>

        <UseEffectDemo></UseEffectDemo>
        <UseThemeDemo></UseThemeDemo>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
