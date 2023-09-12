import DashboardPage from "./components/pages/DashboardPage";
//import { LogInPage } from "./components/pages/LoginPage";
import SignInPage from "./components/pages/SigninPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const LOGIN_ROUTE = "login";
export const REGISTER_ROUTE = "register";
export const DASHBOARD_ROUTE = "dashboard";
export const HOME_ROUTE = "";

interface IRoute {
  path: string;
  element: React.ComponentType<any>;
}

//const publicRoutesData: IRoute[] = [
//{
//  path: LOGIN_ROUTE,
//element: <LogInPage />,
// },
//];

const privateRoutesData: IRoute[] = [];

//export const publicRoutes = createBrowserRouter(publicRoutesData);
//export const privateRoutes = createBrowserRouter(privateRoutesData);
