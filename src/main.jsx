import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './store/AppContext'
import ScrollToTop from './componenet/UI/ScrollToTop'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)
