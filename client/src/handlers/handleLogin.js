import fetch from 'node-fetch';

const handleLogin = async (username, password) => {
  const userData = await fetch(`http://localhost:3030/user/${username}`);
  const userResponse = await userData.json();

  const loginData = await fetch(`http://localhost:3030/login/${userResponse.user["ID"]}/${password}`);
  const loginResponse = await loginData.json();

  if(loginResponse.status === 'ok') {
    return true;
  }

}

export default handleLogin;