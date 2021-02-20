import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import routes from './routes'
import Nav from './Components/Nav/Nav'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
        <Nav />
        {routes}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
