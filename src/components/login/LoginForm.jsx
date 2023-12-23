import React from "react";
import { Form, Input, Button } from "antd";
import { PostData } from "../../http";
import { LOGIN } from "../../config/api";

const LoginForm = () => {
  const onFinish = async (values) => {
    let { username, password } = values;
    let api = LOGIN
    let body = {email:username, password}
    let res = await PostData({api, body})

    if(res?.data){
      let token = res.data?.item?.token
      localStorage.setItem('authToken', JSON.stringify(token))
      window.location.reload()
    }

   
  };

  return (
    <Form name="login" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Log In</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
