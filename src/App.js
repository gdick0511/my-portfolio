import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Social from './Social';
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState(true)
  
  function handleDark(){
    setMode((current) => !current)
  }

  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <button onClick={handleDark}>{mode ? "Dark Mode" : "Light Mode" }</button>
      <Header />
      <About />
      <Projects />
      <Social />
    </div>
  );
}

export default App;
