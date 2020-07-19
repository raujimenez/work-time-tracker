import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Input, Layout, Typography, Row, Col } from "antd";

import { ReactComponent as LoginSvg} from '../../svg/Login.svg'
import handleLogin from "../../handlers/handleLogin";

const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  if(localStorage.getItem('loggedin') === 'true') {
    history.push("/dashboard");
  }
  
  return (
    <React.Fragment>
      <Row style={{ marginTop: "2vh" }}>
        <Col span="24" style={{ textAlign: "center" }}>
          <Typography.Title>Login into your Account</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <LoginSvg />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: "24" }} lg={{ span: "12" }}>
          <Layout.Content style={{ marginTop: "15px" }}>
            <Form
              labelCol={{ span: 3 }}
              colon={false}
              style={{ paddingRight: "1%" }}
            >
              <Form.Item
                label="Username"
                name="Username"
                rules={[{ required: true, max: 15 }]}
              >
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus 
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="Password"
                rules={[{ required: true, max: 40 }]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Row style={{ textAlign: "end" }}>
                <Col span="3">
                  <Link to="/signup">
                    <Button type="default">Create Account</Button>
                  </Link>
                </Col>
                <Col span="21">
                  <Button
                    type="primary"
                    onClick={async () => {
                      if (await handleLogin(username, password)) {
                        history.push("/dashboard");
                      }
                    }}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Layout.Content>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Login;
