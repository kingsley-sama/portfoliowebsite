import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NeomaLandingPage from './neoma'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics>
    <NeomaLandingPage/>
    </Analytics>
  </StrictMode>,
)
