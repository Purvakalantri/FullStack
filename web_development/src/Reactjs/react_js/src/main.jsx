import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Practice1 from './Practice1'
import Practice2 from './Practice2'
import Practice3 from './Practice3'
import Practice4 from './Practice4'
import Practice5 from './Practice5'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Practice1/>
    <Practice2/>
    <Practice3/>
    <Practice4/>
    <Practice5/>
    <App />
  </StrictMode>,

)
