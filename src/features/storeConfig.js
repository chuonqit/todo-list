import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import appReducer from './App/appReducer';
import todoReducer from './Todo/todoReducer';

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer,
});

const persistConfig = {
  key: 'todo',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
    ),
});

sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);
