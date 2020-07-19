import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Button, Form, Input, Row, Col, Layout, Typography } from "antd";

import { ReactComponent as CreateAccountSvg } from "../../svg/CreateAccount.svg";
import sendSignup from "../../handlers/sendSignup.js";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  return (
    <Layout.Content>
      <Row>
        <Col span="24" style={{ textAlign: "center" }}>
          <Typography.Title>Create Your Account</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{textAlign: 'center'}}>
          <CreateAccountSvg />
          <Typography.Paragraph level={2}>
            Your privacy is important.
          </Typography.Paragraph>
          <Typography.Paragraph level={2}>
            We only need a username and password.
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: "24" }} lg={{ span: "12" }}>
            <Form
              labelCol={{ span: 3 }}
              colon={false}
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
              <Form.Item
                label="First Name"
                name="First Name"
                rules={[{ required: false, max: 40 }]}
              >
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="Last Name"
                rules={[{ required: false, max: 40 }]}
              >
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="Email"
                rules={[{ required: false, max: 55 }]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Row style={{ textAlign: "end" }}>
                <Col span="3">
                  <Link to="/login">
                    <Button type="default">Back to Login</Button>
                  </Link>
                </Col>
                <Col span="21">
                  <Button
                    type="primary"
                    onClick={async () => {
                      if (
                        await sendSignup(
                          username,
                          password,
                          firstName,
                          lastName,
                          email
                        )
                      ) {
                        history.push("/login");
                      }
                    }}
                  >
                    Create Account
                  </Button>
                </Col>
              </Row>
            </Form>
        </Col>
      </Row>
      </Layout.Content>
  );
};

export default Signup;
