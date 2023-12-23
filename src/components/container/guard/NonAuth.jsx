import React, { useEffect } from "react";
import useAuth from "../../../hook/useAuth";
import { HOME } from "../../../routes/slug";
import { useNavigate } from "react-router-dom";
import Loading from "../../reusable/loading";

const NonAuth = ({ children }) => {
  let [auth, setAuth, authLoading] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ auth });
  }, [auth]);

  useEffect(() => {
    console.log({ authLoading });
  }, [authLoading]);
  
  if (authLoading) {
    return <Loading />;
  } else {
    if (auth) {
      navigate(HOME);
    }
  }

  return <div>{children}</div>;
};

export default NonAuth;
