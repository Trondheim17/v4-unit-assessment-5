import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import routes from './routes'
import Nav from './Components/Nav/Nav'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Nav />
      {routes}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
