import fetch from 'node-fetch';

const sendDevTask = async (title, description, prsubmitted, prreviewed, startTime, userid) => {
  const taskResponse = await fetch('locahost:3030/tasks', {
    method: 'POST',
    body: {
      title,
      description,
      prsubmitted,
      prreviewed
    }
  });

}

export default sendDevTask;