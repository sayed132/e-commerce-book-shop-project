import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'; 
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx';
import { LicenseTypeProvider } from './ThemeContext/LicenseTypeContext';
import AuthProvider from './ContextData/ContextData';
import { Toaster } from 'react-hot-toast'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LicenseTypeProvider>
      <AuthProvider>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <App />
      </AuthProvider>
      </LicenseTypeProvider>
    </ThemeProvider> 
  </React.StrictMode>,
)
