import React, { useEffect, useState } from "react";
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

import { useAtom } from "jotai";
import { profileAtom } from "./../../store/index";
import { tokenAtom } from "./../../store/index";

import { AuthUserInfo } from "../../interfaces";
import { getProfileInfo } from "./../../libs/queries";

const Profile: NextPage = (props) => {
  const router = useRouter();
  const [token] = useAtom(tokenAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (done) {
      getProfileInfo(token).then((res: AuthUserInfo) => {
        setProfile(res);
      });
    }
    setDone(true);
  }, [done]);

  return (
    <>
      <Layout>
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="main-content">
            <div className="feeds">
              <ProfileAvatarBlock />
              <ProfileBasicBox />
              <ProfileSchoolCodeBox />
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
