import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/slice";
import productsReducer from "./products/slice";
import ordersReducer from "./orders/slice";
import suppliersReducer from "./suppliers/slice";
import customersReducer from "./customers/slice";
import dashboardReducer from "./dashboard/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    orders: ordersReducer,
    suppliers: suppliersReducer,
    customers: customersReducer,
    dashboard: dashboardReducer,
  },
});
