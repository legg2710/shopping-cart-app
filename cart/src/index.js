import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Aupp from './components/Aupp'
import "./styles.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Aupp />
    </BrowserRouter>
  </React.StrictMode>
);
