import React from "react";
import { Layout, Menu } from "antd";

const TopBar = (props) => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">menu item 1</Menu.Item>
        <Menu.Item key="2">menu item 2</Menu.Item>
        <Menu.Item key="3">menu item 3</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default TopBar;
