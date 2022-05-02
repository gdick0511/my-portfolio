import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Social from './Social';
import { useState } from 'react'
import Main from './Main';
import Navbar from './Navbar';

function App() {
  const [mode, setMode] = useState(true)
  
  function handleDark(){
    setMode((current) => !current)
  }

  return (
    <div className="App">
      {/* <button onClick={handleDark}>{mode ? "Dark Mode" : "Light Mode" }</button> */}
      <Navbar />
      <Main />
      <Header />
      <About />
      <Projects />
      <Social />
    </div>
  );
}

export default App;
