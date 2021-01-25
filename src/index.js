import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import App from './components/App';

import { store, persistor } from './redux/store';
import PreLoader from './components/PreLoader';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<PreLoader />} persistor={persistor}></PersistGate>
      <App />
    </Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
