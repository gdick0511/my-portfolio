import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Social from './Social';
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
      <Header />
      <Main />
      {/* <About />
      <Projects />
      <Social />  */}
    </div> 
  );
}

export default App;
