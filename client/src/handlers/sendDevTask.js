import fetch from "node-fetch";

const sendDevTask = async (
  title,
  description,
  prsubmitted,
  prreviewed,
  startTime,
  userid
) => {
  const taskResponse = await fetch("http://localhost:3030/tasks/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      prsubmitted: prsubmitted,
      prreviewed: prreviewed,
    }),
  });

  if (!taskResponse) {
    console.log(taskResponse);
    return;
  }

  const taskJson = await taskResponse.json();
  if (taskJson.status !== 'ok') {
    return;
  } 
  const userTaskResponse = await fetch(`http://localhost:3030/userTasks`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      userid: localStorage.getItem('userid'),
      taskid: taskJson.taskid
    }
  });

  if (!userTaskResponse) {
    return;
  }
  const userTaskJson = await userTaskResponse.json();
  if (!userTaskJson) {
    return;
  }
};

export default sendDevTask;
