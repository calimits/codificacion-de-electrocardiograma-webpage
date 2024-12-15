import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './components/Home.jsx'
import AboutEcr from './components/AboutEcr.jsx'
import Docs from './components/Docs.jsx'
import SignalCoded from './components/SignalCoded.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutEcr/>}/>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/signalcoded" element={<SignalCoded/>}/>
        <Route path="*" element={<h1>Error 404 Not Found</h1>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
