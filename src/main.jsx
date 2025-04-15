import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HospitalProvider } from './HospitalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HospitalProvider>
      <App />
    </HospitalProvider>
  </StrictMode>,
)
