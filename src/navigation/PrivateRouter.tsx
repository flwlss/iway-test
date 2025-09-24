import { Navigate } from "react-router";
import Cookies from "js-cookie";
import { PATHS } from "./paths";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = !!Cookies.get("token");

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={PATHS.login} replace />
  );
};

export default PrivateRoute;
