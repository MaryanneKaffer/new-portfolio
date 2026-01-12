import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DefaultLayout from "../layout/defaultLayout"
import App from './App.tsx'
import { LanguageProvider } from './context/languageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <DefaultLayout>
        <App />
      </DefaultLayout>
    </LanguageProvider>
  </StrictMode>,
)
