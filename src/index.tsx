import React from 'react'; // Add this line
import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

root.render(
    <h1 className='text-2xl font-bold underline'>React-Typescript-Vite-Tailwind</h1>
)