import React from "react";
import { PageBG } from "../assets";
import { Tabs } from "antd";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";
const { TabPane } = Tabs;
const Login = () => {
  let tabItems = [
    {
      key: "login",
      label: "Login",
      children: <LoginForm />,
    },
    {
      key: "signup",
      label: "Sign Up",
      children: <SignupForm />,
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${PageBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-white"
    >
      <div className="p-4 border rounded-md bg-white" ><Tabs defaultActiveKey="login" items={tabItems} centered /></div>
       
    </div>
  );
};

export default Login;
