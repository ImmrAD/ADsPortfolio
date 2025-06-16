import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const theme = {}; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
