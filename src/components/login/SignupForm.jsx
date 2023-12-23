import React from "react";
import { Form, Input, Button } from "antd";
import { REGISTRATION } from "../../config/api";
import { PostData } from "../../http";

const SignupForm = () => {
  const onFinish = async(values) => {
    let { name, email, password } = values;

    let api = REGISTRATION
    let body = {name, email, password}
    let res = await PostData({api, body})

    if(res?.data){
      let token = res.data?.item?.token
      localStorage.setItem('authToken', JSON.stringify(token))
      window.location.reload()
    }
  };

  return (
    <Form name="signup" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
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

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Sign Up</Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
