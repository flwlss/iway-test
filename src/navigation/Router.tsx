import { Route, Routes } from "react-router";
import { PATHS } from "./paths";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.login} element={<LoginPage />} />
      <Route path={PATHS.home} element={<HomePage />} />
    </Routes>
  );
};

export default Router;
