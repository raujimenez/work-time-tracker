import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateTask from "./CreateTask";
import moment from "moment";

import {
  Row,
  Col,
  Layout,
  Typography,
  Form,
  Input,
  Checkbox,
  Tag,
  TimePicker,
  Button,
} from "antd";
import { ReactComponent as DevelopmentCreateTask } from "../../svg/DevelopmentCreateTask.svg";

const handleCreateTask = async (e) => {
  // POST to /tasks
  // retrieve created task_id and POST to /userTask
}

const CreateTaskDevelopment = (props) => {
  const [isJiraTicket, setIsJiraTicket] = useState(true);
  const [jiraTicketId, setJiraTicketId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(moment());
  return (
    <Layout.Content style={{ padding: "25px" }}>
      <Row style={{ paddingTop: "2vh" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Typography.Title>Development Task Information</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <DevelopmentCreateTask />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "2vh" }}>
        <Col xs={{ span: "24" }} lg={{ span: "12" }}>
          <Form labelCol={{ span: 3 }} colon={false}>
            <Form.Item>
              <Checkbox
                style={{ display: isJiraTicket ? "none" : "" }}
                checked={isJiraTicket}
                value={isJiraTicket}
                onChange={(e) => {
                  setIsJiraTicket(!isJiraTicket);
                  setJiraTicketId("");
                }}
              >
                Jira Item
              </Checkbox>
            </Form.Item>
            <Form.Item
              style={{ display: !isJiraTicket ? "none" : "" }}
              label="Jira Ticket ID"
            >
              <Input
                style={{ width: "25%" }}
                disabled={!isJiraTicket}
                value={jiraTicketId}
                onChange={(e) => setJiraTicketId(e.target.value.toUpperCase())}
                maxLength={10}
              />
              <Checkbox
                style={{
                  display: !isJiraTicket ? "none" : "",
                  marginLeft: "20px",
                }}
                defaultChecked
                checked={isJiraTicket}
                value={isJiraTicket}
                onChange={(e) => {
                  setIsJiraTicket(!isJiraTicket);
                  setJiraTicketId("");
                }}
              >
                Jira Item
              </Checkbox>
            </Form.Item>
            <Form.Item label="Task Title">
              <Row>
                <Col span={isJiraTicket ? "19" : "24"}>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={100}
                  />
                </Col>
                <Col style={{ paddingLeft: "20px" }}>
                  <Tag
                    visible={isJiraTicket && jiraTicketId !== ""}
                    color="#108ee9"
                  >
                    <Typography.Text style={{ color: "white" }}>
                      {jiraTicketId}
                    </Typography.Text>
                  </Tag>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={250}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>
            <Form.Item label="Started on">
              <TimePicker
                format="HH:mm"
                value={startTime}
                onChange={(time) => setStartTime(time)}
                defaultOpenValue={startTime}
              />
            </Form.Item>
            <Form.Item>
              <Row justify="end">
                <Col xs={{span: 16}} lg={{span: 5}}>
                  <Link to="/create-task">
                    <Button type="default">Back to Create Task</Button>
                  </Link>
                </Col>
                <Col xs={{span: 8}} lg={{span: 5}}>
                  <Button type="primary" onClick={handleCreateTask}>Create Task</Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default CreateTaskDevelopment;
