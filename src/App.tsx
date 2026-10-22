import './App.css'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { VortexBackground } from './components/VortexBackground'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'

// Chatbot UI (components/Chatbot.tsx + components/Popup.tsx) is hidden while its backend is down.

function App() {
  return (
    <>
        <VortexBackground />
      <div className="relative z-10 items-center justify-center w-full">
          <div className="w-full lg:max-w-5xl max-w-xl mx-auto px-4">
            <Navbar/>
            <Home />
            <Experience />
            <Skills />
            <Projects />
            <Achievements />
        </div>
        </div>
    </>
  )
}

export default App
