import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useLoginMutation } from "../store/api/authApi";
import { useNavigate } from "react-router";
import { PATHS } from "../navigation/paths";
import Cookies from "js-cookie";
import type { LoginResponse } from "../types/login";

type FieldType = {
  login: string;
  password: string;
};

const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const result = await login(values).unwrap();
      Cookies.set("token", result.result.token);
      navigate(PATHS.home);
    } catch (error: any) {
      const errorMessage = error.data as LoginResponse;
      alert(errorMessage.error?.message);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Login"
        name="login"
        rules={[{ required: true, message: "Please input your login!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
