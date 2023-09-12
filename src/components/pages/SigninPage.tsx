import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authConnection } from "../../store/services/AuthCreator";
import React, { useState } from "react";
import { DASHBOARD_ROUTE } from "../../routs";

function SignInPage() {
  const dispatch = useAppDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const user = useAppSelector((state) => state.authReducer.user);

  const isEmpty = !Object.keys(user).length;

  const handleSignIn = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      if (isEmpty) dispatch(authConnection());
      setTimeout(() => setIsButtonDisabled(false), 1000);
    }
  };

  if (!isEmpty) {
    return <Navigate to={DASHBOARD_ROUTE} />;
  }

  return (
    <div className="text-white bg-neutral-700 h-screen w-screen flex justify-center pt-16">
      <button onClick={handleSignIn} disabled={isButtonDisabled}>
        Sign in
      </button>
    </div>
  );
}

export default SignInPage;
