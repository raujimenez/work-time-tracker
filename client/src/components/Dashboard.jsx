import React from "react";
import { Layout, Card, Row, Col, Typography } from "antd";
import { ReactComponent as TimeManagement } from "../svg/TimeManagement.svg";
import { ReactComponent as CreateTasks } from "../svg/CreateTasks.svg";
import { ReactComponent as ViewData } from "../svg/ViewData.svg";

const imageStyles = {
  paddingTop: "10%",
};

const Dashboard = (params) => {
  return (
    <Layout.Content>
      <Row justify="space-around">
        <Col
          style={{ marginTop: "2vh" }}
          xs={{ span: "24" }}
          lg={{ span: "7" }}
        >
          <Card hoverable style={imageStyles} cover={<TimeManagement />}>
            <Typography.Title style={{ textAlign: "center" }}>
              Manage Tasks
            </Typography.Title>
          </Card>
        </Col>
        <Col
          style={{ marginTop: "2vh" }}
          xs={{ span: "24" }}
          lg={{ span: "7" }}
        >
          <Card hoverable style={imageStyles} cover={<CreateTasks />}>
            <Typography.Title style={{ textAlign: "center" }}>
              Create Tasks
            </Typography.Title>
          </Card>
        </Col>
        <Col
          style={{ marginTop: "2vh" }}
          xs={{ span: "24" }}
          lg={{ span: "7" }}
        >
          <Card hoverable style={imageStyles} cover={<ViewData />}>
            <Typography.Title style={{ textAlign: "center" }}>
              View Data
            </Typography.Title>
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Dashboard;
