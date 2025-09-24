import { Navigate } from "react-router";
import Cookies from "js-cookie";
import { PATHS } from "./paths";

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = !!Cookies.get("token");

  return isAuthenticated ? (
    <Navigate to={PATHS.home} replace />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
