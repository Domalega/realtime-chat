import { FC, ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

interface RequiredAuthProps {
  children: ReactNode;
}
const RequiredAuth: FC<RequiredAuthProps> = ({ children }: any) => {
  const user = useAppSelector((state) => state.authReducer.user);

  const auth = true; //user.id;

  if (!auth) return <Navigate to="/login" />;

  return children;
};

export default RequiredAuth;
