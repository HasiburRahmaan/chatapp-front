import React, { useEffect } from "react";
import useAuth from "../../../hook/useAuth";
import { HOME, LOGIN } from "../../../routes/slug";
import { useNavigate } from 'react-router-dom';
import Loading from "../../reusable/loading";

const Auth = ({ children }) => {
  let [auth, setAuth, authLoading] = useAuth();
  const navigate = useNavigate();
  

  useEffect(()=>{
  }, [auth])
  useEffect(()=>{
  }, [authLoading])

  if (authLoading) {
    return <Loading />;
  } else {
    
    if (!auth) {
      navigate(LOGIN)
    }
  }

  return <div>{children}</div>;
};

export default Auth;
