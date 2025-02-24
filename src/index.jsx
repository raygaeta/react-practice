import React from 'react'; // Add this line
import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)