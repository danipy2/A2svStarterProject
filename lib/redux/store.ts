import { authApi } from "@/app/(features)/auth/services/auth";
import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
// import { adminApi } from "./api/adminApi";
import { adminApi } from "./slices/adminSlice";
import { cyclesApi } from "./api/applicationCyclesApi";

import { managersApi } from "./api/managerApi";

import { applicationsApi } from "./api/clientApi";


export const store = configureStore({
  reducer: {
    [applicationsApi.reducerPath]: applicationsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [cyclesApi.reducerPath]: cyclesApi.reducer,
    [managersApi.reducerPath]:managersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      adminApi.middleware,
      cyclesApi.middleware,
      managersApi.middleware,
      applicationsApi.middleware

    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
