export const getProfileInfo = async (email: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/accounts/${email}/info`
  );
  const membership = await response.json();
  if (membership.status) {
    return membership.data;
  } else {
    return {};
  }
};

export const getUserInfo = async (token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/accounts/${token}/info`
  );
  const user = await response.json();
  if (user.status) {
    return user.data;
  } else {
    return {};
  }
};

export const sessionStart = async (email: string, sessid: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/accounts/session/${email}/start?sessionid=${sessid}`
  );
  const user = await response.json();
  if (user.status) {
    return user.data;
  } else {
    return {};
  }
};
