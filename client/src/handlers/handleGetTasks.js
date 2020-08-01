import fetch from 'node-fetch';

const URL = ''

const handleGetTasks = async () => {
  const taskInfo = fetch(URL.concat([])) 
}

export default handleGetTasks;