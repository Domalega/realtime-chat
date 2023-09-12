import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../../routs";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logOut } from "../../store/services/AuthSlice";

function NavigationBar() {
  //fix
  const user = useAppSelector((state) => state.authReducer.user);
  const dispatch = useAppDispatch();
  const isAuth = true; //user.id;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className="absolute top-0 w-screen bg-neutral-800 h-16 flex items-center justify-end pr-10 gap-4 border-b-2 border-white">
      {isAuth ? (
        <button
          onClick={handleLogOut}
          className="bg-neutral-700 hover:bg-neutral-600 px-4 py-2 text-white rounded-3xl duration-300"
        >
          Log out
        </button>
      ) : (
        <>
          <Link
            to={LOGIN_ROUTE}
            className="bg-neutral-700 hover:bg-neutral-600 px-4 py-2 text-white rounded-3xl duration-300"
          >
            Log in
          </Link>
          <Link
            to={REGISTER_ROUTE}
            className="bg-neutral-700 hover:bg-neutral-600 px-4 py-2 text-white rounded-3xl duration-300"
          >
            Sign in
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavigationBar;
