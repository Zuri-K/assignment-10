import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }


  return (
    <div>
      <h1>Search App</h1>
      <Search searchTerm = {searchTerm} onSearch={handleSearch}/>
      <p>Searching for: {searchTerm}</p>
    </div>
  );
}



function Search(props){
  return(
    <div>
      <label htmlFor="search"></label>
      <input 
 
        id="search"
        type="text"
        value={props.searchTerm}        
        onChange={props.onSearch}
        />

    </div>
  );
}

export default App
