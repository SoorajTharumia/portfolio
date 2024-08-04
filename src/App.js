import './App.css';
import Home from './components/Home/home'
import About from './components/About/about'
import Project from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Navbar from './components/Navbar/navbar'

function App() {
  return (
    <div className="App" class="bg-gradient-to-r from-blue-500 to-indigo-400">
      <header className="App-header ">
        <Navbar/>
        <Home />
        <About />
        <Project />
        <Contact />
      </header>
    </div>
  );
}

export default App;
