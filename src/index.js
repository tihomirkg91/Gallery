import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import index from './index.scss'

// Component
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
