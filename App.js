import 'react-native-gesture-handler';
import React from 'react';
import 'moment-timezone';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storage from './src/redux/store';

import Router from './src/router';

const {store, persistor} = storage;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
