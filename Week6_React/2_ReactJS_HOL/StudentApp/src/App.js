import './App.css';
import Home from './components/Home.js';
import About from './components/About';
import Contact from './components/Contact';

function App(){
  return(
    <div class='container'>
      <Home/>
      <About/>
      <Contact/>
    </div>

  );
}

export default App;