import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import ProfileAvatarBlock from "../../components/ProfileAvatarBlock";
import ProfileSchoolCodeBox from "../../components/ProfileSchoolCodeBox";
import ProfileSettingsBox from "../../components/ProfileSettingsBox";
import ProfileBasicBox from "./../../components/ProfileBasicBox";
import ProfileGoogleScholarBox from "./../../components/ProfileGoogleScholarBox";
import ProfileScopusBox from "../../components/ProfileScopusBox";
import ProfileOrcidBox from "../../components/ProfileOrcidBox";

import { withAuth } from "./../../hocs/auth/withAuth";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { getUserInfo } from "../../libs/queries";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { AuthUserInfo } from "../../interfaces";
import withProfile from "../../hocs/data/withProfile";
const cookie = require("js-cookie");

const HOC_ProfileAvatarBlock = withProfile(ProfileAvatarBlock);
const HOC_ProfileBasicBox = withProfile(ProfileBasicBox);

const HOC_ProfileSettingsBox = withProfile(ProfileSettingsBox);
const HOC_ProfileSchoolCodeBox = withProfile(ProfileSchoolCodeBox);

// const HOC_ProfileSettingsBox = withProfile(ProfileAvatarBlock);
// const HOC_ProfileAvatarBlock = withProfile(ProfileAvatarBlock);
// const HOC_ProfileAvatarBlock = withProfile(ProfileAvatarBlock);

type UProps = {
  profile: AuthUserInfo;
  setProfile: (profile: AuthUserInfo) => void;
};

const Profile: NextPage<UProps> = (props) => {
  const { profile, setProfile } = props;

  const dispatch = useDispatch<Dispatch>();
  const router = useRouter();
  const token = cookie.get("token");

  useEffect(() => {
    if (!token) {
      router.push("/auth/");
    }
  }, [token]);

  return (
    <>
      <Layout>
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="main-content">
            <div className="feeds">
              {JSON.stringify(profile)}
              <HOC_ProfileAvatarBlock />
              <HOC_ProfileBasicBox />
              <ProfileSchoolCodeBox/>
              <ProfileGoogleScholarBox />
              <ProfileScopusBox />
              <ProfileOrcidBox />
              <ProfileSettingsBox />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default withAuth(Profile);
