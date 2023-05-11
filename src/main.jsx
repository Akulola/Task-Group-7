import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './Components/Form.jsx'
import Card from './Components/Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <Card />
  </React.StrictMode>,
)
