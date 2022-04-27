import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './features/storeConfig';
import { PersistGate } from 'redux-persist/integration/react';

import App from './features/App';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE,
);
