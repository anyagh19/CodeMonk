import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavbarDemo } from './modules/common/components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarDemo />
    <App />
  </StrictMode>,
)
