import React, { useState } from "react";
import { AuthUserInfo } from "../interfaces";
import withProfile from "../hocs/data/withProfile";
import { AccountTypes, Gender } from "../interfaces/enums";
import { useAtom } from "jotai";
import { tokenAtom } from "../store/index";

type UProps = {
  profile: AuthUserInfo;
};
const EditProfileBlock = (props: UProps) => {
  const { profile } = props;
  const token = useAtom(tokenAtom);

  const [profile, setProfile] = useState<AuthUserInfo>({
    accountType: profile?.accountType,
    firstname: profile?.firstname,
    lastname: profile?.lastname,
    gender: profile?.gender,
    birthday: profile?.birthday,
  });

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `/api/accounts/${token}/update-profile-basics`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileState),
      }
    );
    const { status } = await response.json();
    alert("done");
    if (status) {
    } else {
    }
  };
  return (
    <>

    </>
  );
};

export default EditProfileBlock;
