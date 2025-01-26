import { configureStore } from "@reduxjs/toolkit";
import certificateReducer from "./certificateSlice";

export const store = configureStore({
  reducer: {
    certificate: certificateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
