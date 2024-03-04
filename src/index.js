import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { MealProvider } from './context/MealContext';
import { SidebarProvider } from './context/SidebarContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <SidebarProvider>
    <MealProvider>
    <App />
    </MealProvider>
    </SidebarProvider>

);
