const cookie = require("js-cookie");


export const getConnections = async (token: string) => {
  const response = await fetch(`/api/accounts/${token}/connections`);
  const connections = await response.json();
  if (connections.status) {
    return connections.data;
  } else {
    return {};
  }
};



export const fetchUserInfo = () => {
  const token = cookie.get("token");
  return fetch(`/api/accounts/${token}/info`)
    .then((response) => response.json())
    .then((data) => data.data);
};



export const getSchools = () => {
  return fetch(`/api/schools/list`)
    .then((response) => response.json())
    .then((data) => data.schools);
};



export const getUserName = async (token: string) => {
  const response = await fetch(`/api/accounts/${token}/username`);
  const user = await response.json();
  if (user.status) {
    return user.username;
  } else {
    return {};
  }
};

export const getProfileInfo = async (token: string) => {
  const response = await fetch(`/api/accounts/${token}/profile`);
  const membership = await response.json();
  if (membership.status) {
    return membership.data;
  } else {
    return {};
  }
};

export const getUserInfo = async (token: string) => {
  const response = await fetch(`/api/accounts/${token}/info`);
  const user = await response.json();
  if (user.status) {
    return user.data;
  } else {
    return {};
  }
};

export const getProfile = async (username: string) => {
  const response = await fetch(`/api/${username}/profile`);
  const user = await response.json();
  if (user.status) {
    return user.data;
  } else {
    return {};
  }
};
export const sessionStart = async (email: string, sessid: string) => {
  const response = await fetch(
    `/api/accounts/session/${email}/start?sessionid=${sessid}`
  );
  const user = await response.json();
  if (user.status) {
    return user.data;
  } else {
    return {};
  }
};
