import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import App from './App'
import {ContextProvider} from "./Context"

ReactDOM.render(
  <ContextProvider>
    <Router basename="/pic-some-app">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>,
  document.getElementById('root')
)
