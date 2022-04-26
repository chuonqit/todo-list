import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './features/storeConfig';

import App from './features/App';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE,
);
