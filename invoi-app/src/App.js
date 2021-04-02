import React from 'react';
import './App.css';
import Login from './components/Login';
import ContextProvider from "./userContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Login />
      </div>
    </ContextProvider>
  );
}

export default App;
