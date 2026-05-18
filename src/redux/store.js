import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { dashboardReducer } from "./dashboard/slice.js";
import { ordersReducer } from "./orders/slice.js";
import { productsReducer } from "./products/slice.js";
import { suppliersReducer } from "./suppliers/slice.js";
import { customersReducer } from "./customers/slice.js";

const customPersistStorage = {
  getItem: (key) => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && window.localStorage) {
        resolve(window.localStorage.getItem(key));
      } else {
        resolve(null);
      }
    });
  },
  setItem: (key, value) => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
      resolve();
    });
  },
  removeItem: (key) => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
      }
      resolve();
    });
  },
};

const persistConfig = {
  key: "root-auth",
  version: 1,
  storage: customPersistStorage, // Yeni hazırladığımız güvenli yapıyı veriyoruz
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    dashboard: dashboardReducer,
    orders: ordersReducer,
    products: productsReducer,
    suppliers: suppliersReducer,
    customers: customersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
