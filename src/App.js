import './App.css';
import Home from './components/Home/home'
import About from './components/About/about'

function App() {
  return (
    <div className="App" class="bg-gradient-to-r from-blue-500 to-indigo-400">
      <header className="App-header ">
        <Home />
        <About />
      </header>
    </div>
  );
}

export default App;
