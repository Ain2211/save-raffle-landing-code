import { configureStore } from '@reduxjs/toolkit';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from './storage';
import application from './application/reducer';
import user from './user/reducer';
import { userApi } from './apis';

const VERSION_STORE = 1;

const PERSIST_CONFIG = {
  storage,
  version: VERSION_STORE,
  migrate: createMigrate({
    [VERSION_STORE]: () => {
      return undefined;
    },
  }),
};

const rootReducer = {
  application: persistReducer(
    {
      key: 'application',
      blacklist: [],
      ...PERSIST_CONFIG,
    },
    application,
  ),
  user: persistReducer(
    {
      key: 'user',
      blacklist: [],
      ...PERSIST_CONFIG,
    },
    user,
  ),
  [userApi.reducerPath]: userApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
