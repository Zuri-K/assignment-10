import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return(
    <div>
      <h1>Welcome to the Counter App</h1>
      <Counter/>

    </div>
  )
}



function Counter(props){
  
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleClear = () => {
    setCount(0)
  };

  return(
    <div>
      <label htmlFor="title">Counting!</label>
      <h2>{props.title}</h2>
      <p>Count: {count} </p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleClear}>Reset</button>
    </div>
  )
}

export default App
