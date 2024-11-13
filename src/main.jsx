import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NeomaLandingPage from './neoma'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NeomaLandingPage/>
  </StrictMode>,
)
