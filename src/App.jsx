import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AllOrdersPage from "./pages/AllOrdersPage/AllOrdersPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import AllSuppliersPage from "./pages/AllSuppliersPage/AllSuppliersPage";
import CustomersDataPage from "./pages/CustomerDataPage/CustomerDataPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="orders" element={<AllOrdersPage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="suppliers" element={<AllSuppliersPage />} />
          <Route path="customers" element={<CustomersDataPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Modal />
    </>
  );
}

export default App;
