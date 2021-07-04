import React from 'react';
import Provider from './contexts/Provider'
import Routes from "./components/Routes"
import { BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Provider>
          <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
