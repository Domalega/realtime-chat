import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./services/AuthSlice";

const rootReducer = combineReducers({
  authReducer: authSlice.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
