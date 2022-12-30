// HOC
import React, { useState, useEffect } from "react";
import { AuthUserInfo } from "../../interfaces";
import { getUserInfo } from "../../libs/queries";
const cookie = require("js-cookie");

const withProfile = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC: React.FC<P> = (props) => {
    const [profile, setProfile] = useState<AuthUserInfo>({});
    useEffect(() => {
      const token = cookie.get("token");
      if (token) {
        getUserInfo(token).then((res) => {
          setProfile(res);
        });
      }
    }, []);
    return (
      <WrappedComponent {...props} profile={profile} setProfile={setProfile} />
    );
  };
  return HOC;
};

export default withProfile;
