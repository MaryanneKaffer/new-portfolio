import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DefaultLayout from "../layout/DefaultLayout"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </StrictMode>,
)
