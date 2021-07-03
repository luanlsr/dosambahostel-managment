import React from 'react';
import LoginProvider from './contexts/LoginProvider'
import HostelProvider from './contexts/LoginProvider'
import Routes from "./components/Routes"
import { BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <HostelProvider>
          <Routes />
        </HostelProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
