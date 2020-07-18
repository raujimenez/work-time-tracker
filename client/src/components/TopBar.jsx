import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const TopBar = (props) => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/signup">Create Account</Link></Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default TopBar;
