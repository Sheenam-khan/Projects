import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import Game from './TicTacToeGame/Game'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */} 
    <Game/>
  </React.StrictMode>
);
