import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import PostMovie from './PostMovie'
import GetMovieData from './GetMovieData'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <PostMovie/>
    <GetMovieData/>
  </StrictMode>
)
