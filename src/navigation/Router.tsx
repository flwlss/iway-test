import { Route, Routes, Navigate } from "react-router";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRouter";
import PublicRoute from "./PublicRoute";

const Router = () => {
  return (
    <Routes>
      <Route
        path={PATHS.login}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path={PATHS.home}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to={PATHS.home} replace />} />
    </Routes>
  );
};

export default Router;
