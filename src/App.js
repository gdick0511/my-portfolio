import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Social from './Social';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <Header />
      <About />
      <Projects />
      <Social />
    </div>
  );
}

export default App;
