import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Layout, Input, Card, Typography } from "antd";

import { ReactComponent as DeveloperActivity } from "../../svg/DeveloperActivity.svg";
import { ReactComponent as Meeting } from "../../svg/Meeting.svg";
import { ReactComponent as SomethingElse } from "../../svg/SomethingElse.svg";

const imageStyles = {
  paddingTop: "10%",
};

const CreateTask = (props) => {
  return (
    <Layout.Content>
      <Row justify="space-around">
        <Col style={{ marginTop: "4vh" }}>
          <Typography.Title>What did you work on?</Typography.Title>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col
          style={{ marginTop: "2vh" }}
          xs={{ span: "24" }}
          lg={{ span: "7" }}
        >
          <Link to="/create-task/development">
            <Card hoverable style={imageStyles} cover={<DeveloperActivity />}>
              <Typography.Title style={{ textAlign: "center" }}>
                Development
              </Typography.Title>
            </Card>
          </Link>
        </Col>
        <Col
          style={{ marginTop: "2vh" }}
          xs={{ span: "24" }}
          lg={{ span: "7" }}
        >
          <Card hoverable style={imageStyles} cover={<Meeting />}>
            <Typography.Title style={{ textAlign: "center" }}>
              In a Meeting
            </Typography.Title>
          </Card>
        </Col>
        <Col
          style={{ marginTop: "2vh" }}
          xs={{ span: "24" }}
          lg={{ span: "7" }}
        >
          <Card hoverable style={imageStyles} cover={<SomethingElse />}>
            <Typography.Title style={{ textAlign: "center" }}>
              Something else
            </Typography.Title>
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default CreateTask;
