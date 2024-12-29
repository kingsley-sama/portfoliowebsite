import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NeomaLandingPage from './neoma'
import { Analytics } from '@vercel/analytics/react'
import ThemeContextProvider from './context/themeContextProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeContextProvider>
    <NeomaLandingPage/>
   </ThemeContextProvider>
   <Analytics />
     </StrictMode>,
)
