import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router'
import AboutEcr from './components/AboutEcr.jsx'
import SignalCoded from './components/SignalCoded.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" index element={<SignalCoded/>}/>
        <Route path="/about" element={<AboutEcr/>}/>
        <Route path="/index.html" element={<Navigate to="/"/>}/>
        <Route path="*" element={<h1>Error 404 Not Found</h1>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
