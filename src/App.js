import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { clarity } from 'react-microsoft-clarity';
import Home from './components/Home/home'
import About from './components/About/about'
import Project from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'

function App() {
  clarity.init("ocvtuw4ab5")
  return (
    <div className="App" class="bg-slate-100">
      <header className="App-header ">
        <Navbar/>
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer/>
        <Analytics />
      </header>
    </div>
  );
}

export default App;
