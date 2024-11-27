import { useRoutes, BrowserRouter} from 'react-router-dom';
import React from 'react';
import './App.css'

import { NavBar } from '../../Components/NavBar';

import { AppRoutes } from '../../Context';
function App() {
  
  return (
      <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
      </BrowserRouter>
  )
}

export default App