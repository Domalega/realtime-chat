import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LogInPage from "../pages/LoginPage";
import Layout from "./Layout";
import {
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../../routs";
import SignInPage from "../pages/SigninPage";
import DashboardPage from "../pages/DashboardPage";
import RequiredAuth from "../../hoc/RequiredAuth";
import StartPage from "../pages/StartPage";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path={LOGIN_ROUTE} element={<LogInPage />} />
        <Route path={REGISTER_ROUTE} element={<SignInPage />} />
        <Route path={HOME_ROUTE} element={<StartPage />} />

        <Route
          path={DASHBOARD_ROUTE}
          element={
            <RequiredAuth>
              <DashboardPage />
            </RequiredAuth>
          }
        />

        <Route path="*" element={<Navigate to={DASHBOARD_ROUTE} replace />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
