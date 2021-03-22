import { Form, Input, Button } from "antd";
import { getLogin } from "../store/actios/api";
const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 6 },
};

const tailLayout = {
  wrapperCol: { offset: 9, span: 16 },
};

function Login(props) {
  const { history } = props;
  function onFinish(values) {
    getLogin(values).then((res) => {
      history.replace("/home");
    });
  }
  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ marginTop: "50px" }}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入你的用户名!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入你的密码!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
