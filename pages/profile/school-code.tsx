import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

import { withAuth } from "./../../hocs/auth/withAuth";
import { NextPage } from "next";

import { useAtom } from "jotai";
import { tokenAtom } from "./../../store/index";

import { AuthUserInfo } from "../../interfaces";
import { getProfileInfo } from "./../../libs/queries";
const cookie = require("js-cookie");

const SchoolCode: NextPage = () => {
  const [token] = useAtom<any>(tokenAtom);
  const [profile, setProfile] = useState<AuthUserInfo>({
    schoolCode: "",
  });

  useEffect(() => {
    getProfileInfo(token).then((res: AuthUserInfo) => {
      setProfile(res);
    });
  }, [token]);

  const verifySchoolCode = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const _token = cookie.get("token");
    const response = await fetch(
      `/api/accounts/${_token}/update-profile-school-code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );
    const { status } = await response.json();
    alert(status);
  };

  return (
    <>
      <Layout>
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="main-content">
            <div className="feeds">
              <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3">
                <div className="mb-3">
                  <h5 className="lead fw-bold text-body my-1">
                    Confirm University Code
                  </h5>
                  <p className="mb-0">
                    Please enter 12 Digits School code from your institution.
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <form onSubmit={verifySchoolCode}>
                      <div className="form-floating mb-1 d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control rounded-5"
                          value={profile.schoolCode}
                          id="schoolCode"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              schoolCode: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="floatingPass">UNIVERSITY CODE</label>
                      </div>
                      <div className="my-2 w-full">
                        In a bid to ensure that only students and lecturers of
                        the Universities can access the platform, we have
                        implemented a code verification system. Please enter the
                        code you received from your institution to confirm your
                        identity.
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0">
                          Confirm Code
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default withAuth(SchoolCode);
