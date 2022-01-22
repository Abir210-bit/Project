import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import store from './redux/store';
import {BrowserRouter} from "react-router-dom"
<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap' rel="stylesheet"/>
  

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
