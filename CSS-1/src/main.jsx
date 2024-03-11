import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import Contact from './components/Contact'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Contact/>
  </React.StrictMode>,
)
