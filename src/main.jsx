import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App'
import ShoppingCatProvider from './Context'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCatProvider>
     <App />
    </ShoppingCatProvider>
  </StrictMode>,
)
