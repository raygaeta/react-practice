import React from 'react'; // Add this line
import './style.css'
import { createRoot } from 'react-dom/client'
import Restaurant from './components/Restaurant'
import ObjectType from './components/ObjectType'
import Resturant from './components/Restaurant';
import Users from './components/Users';

const root = createRoot(document.querySelector('#root'))

root.render(
    <>    
        <Resturant />
        <Users />
    </>
)
