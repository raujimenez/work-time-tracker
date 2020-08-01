import React, { useState, useEffect, useRef } from 'react';

import {Layout, Row, Col, Table} from 'antd';
import handleGetTasks from '../../handlers/handleGetTasks.js';

const ManageTask = (props) => {
  const fetchedData = useRef(handleGetTasks())
  const [headers, setHeaders] = useState(null);
  const [data, setData] = useState(null);

  

  return (
    <Layout.Content>
      <Row>
        <Col>
          <Table dataSource={} ></Table>
        </Col>
      </Row>
    </Layout.Content>
  )
}

export default ManageTask;