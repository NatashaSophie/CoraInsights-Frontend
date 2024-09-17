import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import alertsReducer from './alerts/slice';
import distanceReducer from './distance/slice';
import routesReducer from './routes/slice';
import timerReducer from './timer/slice';
import trailsReducer from './trails/slice';
import userReducer from './user/slice';

const reducers = combineReducers({
  user: userReducer,
  alerts: alertsReducer,
  trails: trailsReducer,
  routes: routesReducer,
	timer: timerReducer,
	distance: distanceReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
