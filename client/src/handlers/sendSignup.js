import fetch from "node-fetch";

const sendSignup = async (username, password, first, last, email) => {
  const userCreationData = await fetch("http://localhost:3030/user", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      first: first ? first : null,
      last: last ? last : null,
      email: email ? email : null,
    }),
  });
  const userCreationResponse = await userCreationData.json();

  if (userCreationResponse.status === "error") {
    return false;
  }

  const userData = await fetch(`http://localhost:3030/user/${username}`);
  const userResponse = await userData.json();

  const userLoginData = await fetch("http://localhost:3030/login", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userid: userResponse.user["ID"],
      password: password
    })
  });

  if (userLoginData.status === "error") {
    return false;
  }
  return true;
};

export default sendSignup;
