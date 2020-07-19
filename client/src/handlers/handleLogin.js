import fetch from 'node-fetch';

const handleLogin = async (username, password) => {
  const userData = await fetch(`http://localhost:3030/user/${username}`);
  const userResponse = await userData.json();

  const loginData = await fetch(`http://localhost:3030/login/${userResponse.user["ID"]}/${password}`);
  const loginResponse = await loginData.json();

  if(loginResponse.status === 'ok') {
    localStorage.setItem('loggedin', "true");
    localStorage.setItem('userid', userResponse.user["ID"]);
    localStorage.setItem('username', userResponse.user["USERNAME"]);
    localStorage.setItem('first', userResponse.user["FIRST"]);
    localStorage.setItem('last', userResponse.user["LAST"]);
    localStorage.setItem('email', userResponse.user["EMAIL"]);
    return true;
  }
  return false;
}

export default handleLogin;