import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './RootReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
  blacklist: ['group'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {store, persistor};