import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import StoreContextProvider from './components/Context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </StoreContextProvider>
  </BrowserRouter>
)
