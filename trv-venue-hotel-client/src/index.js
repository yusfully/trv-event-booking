import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { createTransform } from 'redux-persist';
import Flatted from 'flatted'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App';
import reducers from './redux/reducers';

import "./index.css"


const transformCircular = createTransform(
  (inboundState, key) => Flatted.stringify(inboundState),
  (outboundState, key) => Flatted.parse(outboundState),
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['booking','form'],
  transforms: [transformCircular]
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);
