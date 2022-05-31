import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState(true)
  
  function handleDark(){
    setMode((current) => !current)
  }

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div> 
  );
}

export default App;
