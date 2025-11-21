import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './app2.jsx'
import App3 from './app3.jsx'
import App4 from './app4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App4 />
  </StrictMode>,
)
