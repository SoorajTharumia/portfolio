import './App.css';
import Home from './components/Home/home'
import About from './components/About/about'
import Project from './components/Projects/projects'

function App() {
  return (
    <div className="App" class="bg-gradient-to-r from-blue-500 to-indigo-400">
      <header className="App-header ">
        <Home />
        <About />
        <Project />
      </header>
    </div>
  );
}

export default App;
