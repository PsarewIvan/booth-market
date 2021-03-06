import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import App from './App';
import store from './redux/store';
import './fonts/roboto/roboto.css';
import './fonts/robotoslab/robotoslab.css';
import './fonts/worksans/worksans.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.state = store;
