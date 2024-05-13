import { BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
