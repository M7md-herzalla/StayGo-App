import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from './assets/languageProvider.jsx';
import translations from './assets/componenet/translateStorage.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter >
     <LanguageProvider translations={translations}>
<App />
     </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
