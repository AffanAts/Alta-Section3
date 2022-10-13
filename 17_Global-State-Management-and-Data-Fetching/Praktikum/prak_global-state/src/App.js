import React from 'react';
import Router from './Router';
import {persistor, store} from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
