import React from 'react'
import ReactDOM from 'react-dom'

// style
import index from './index.scss'

// Component
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
