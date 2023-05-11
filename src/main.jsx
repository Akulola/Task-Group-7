import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './Form.jsx'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <Card />
  </React.StrictMode>,
)
