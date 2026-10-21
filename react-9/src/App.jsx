import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {



  const [username, setUsername] = useState('');

  const[value, setValue] = useLocalStorage('React');

  useEffect(()=>{
    const storage = localStorage.getItem('username', username);

  }, [username])



  const handleUsernameChange = (event) =>{
    setUsername(event.target.value);
  };



  return (
    <div>
      <h1>Welcome!</h1> 
      <InputWithLabel>
        id="username"
        value={username}
        onInputChange={handleUsernameChange}

        Username:

      </InputWithLabel>

      <p>Hello, {username || 'Guest'}!</p>

    </div>
  );
}



function InputWithLabel(props){
  return(
    <>
      <label htmlFor="{props.id}">{props.children}</label>
      <input
      id={props.id}
      type="text"
      value={props.value}
      onChange={props.onInputChange} 
      />

    </>
  )
}

export default App
