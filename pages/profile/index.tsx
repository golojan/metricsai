import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

import { withAuth } from "./../../hocs/auth/withAuth";
import { NextPage } from "next";

import { useAtom } from "jotai";
import { tokenAtom } from "./../../store/index";

import { AuthUserInfo } from "../../interfaces";
import { getProfileInfo } from "./../../libs/queries";
import { AccountTypes, Gender } from "../../interfaces/enums";

const Profile: NextPage = () => {
  //
  const [token] = useAtom(tokenAtom);
  const [profile, setProfile] = useState<AuthUserInfo>({});

  useEffect(() => {
    getProfileInfo(token).then((res: AuthUserInfo) => {
      setProfile(res);
    });
  }, [token]);

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `/api/accounts/${token}/update-profile-basics`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
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
      <Layout>
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="main-content">
            <div className="feeds">
              <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3">
                <div className="mb-3">
                  <h5 className="lead fw-bold text-body mb-0">Upload Photo</h5>
                  <p className="mb-0">
                    Please upload your real face for profile photo. Memes and
                    avatars will be rejected. Our team will review your photo
                    and approve it against you valid ID verification may be
                    required.
                  </p>
                  <header className="profile d-flex align-items-center mt-4">
                    <img
                      alt="#"
                      src={profile.picture}
                      className="rounded-circle me-3"
                    />
                    <div>
                      <span className="text-muted text_short">
                        How are you doing
                      </span>
                      <h5 className="mb-0 text-dark">
                        <span className="fw-bold">
                          {profile.lastname} {profile.firstname}
                        </span>
                      </h5>
                    </div>
                  </header>
                </div>
              </div>
              <div className="mb-3"></div>
              <div className="bg-white px-4 py-4 feed-item rounded-4 shadow-sm mb-3 faq-page">
                <div className="mb-1">
                  <h5 className="lead fw-bold text-body mb-0">Edit Profile</h5>
                </div>
                <form onSubmit={handleProfileUpdate}>
                  <div className="row py-3 gy-3 m-0">
                    <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                      <input
                        type="radio"
                        required={true}
                        className="btn-check"
                        id="guest"
                        name="membership"
                        value={AccountTypes.GUEST}
                        checked={
                          profile.accountType ==
                          AccountTypes[AccountTypes.GUEST]
                        }
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            accountType: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="guest"
                        className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      >
                        <span className="text-start d-grid">
                          <small className="ln-18">I am a Guest</small>
                        </span>
                        <span className="material-icons text-muted md-20">
                          check_circle
                        </span>
                      </label>
                    </div>

                    <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                      <input
                        type="radio"
                        required={true}
                        className="btn-check"
                        id="student"
                        name="membership"
                        value={AccountTypes.STUDENT}
                        checked={
                          profile.accountType ==
                          AccountTypes[AccountTypes.STUDENT]
                        }
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            accountType: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="student"
                        className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      >
                        <span className="text-start d-grid">
                          <small className="ln-18">I am a Student</small>
                        </span>
                        <span className="material-icons text-muted md-20">
                          check_circle
                        </span>
                      </label>
                    </div>

                    <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                      <input
                        type="radio"
                        required={true}
                        className="btn-check"
                        id="lecturer"
                        name="membership"
                        value={AccountTypes.LECTURER}
                        checked={
                          profile.accountType ==
                          AccountTypes[AccountTypes.LECTURER]
                        }
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            accountType: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="lecturer"
                        className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      >
                        <span className="text-start d-grid">
                          <small className="ln-18">I am a Lecturer</small>
                        </span>
                        <span className="material-icons text-muted md-20">
                          check_circle
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-floating mb-3 d-flex align-items-end">
                            <input
                              type="text"
                              required={true}
                              className="form-control rounded-5"
                              placeholder="Firstname"
                              id="Firstname"
                              value={profile.firstname}
                              onChange={(e) =>
                                setProfile({
                                  ...profile,
                                  firstname: e.target.value,
                                })
                              }
                            />
                            <label htmlFor="firstname">FIRST NAME</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3 d-flex align-items-end">
                            <input
                              type="text"
                              required={true}
                              className="form-control rounded-5"
                              id="lastname"
                              value={profile.lastname}
                              placeholder="Lastname"
                              onChange={(e) =>
                                setProfile({
                                  ...profile,
                                  lastname: e.target.value,
                                })
                              }
                            />
                            <label htmlFor="lastname">LAST NAME</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6">
                          <label className="mb-4 text-muted ">GENDER</label>
                          <div className="d-flex align-items-center mb-3 px-0">
                            <div className="form-check mx-3 w-full">
                              <input
                                className="form-check-input"
                                type="radio"
                                required={true}
                                name="gender"
                                id="male"
                                value={Gender.MALE}
                                checked={
                                  profile.gender === Gender.MALE ? true : false
                                }
                                onChange={(e) =>
                                  setProfile({
                                    ...profile,
                                    gender: e.target.value,
                                  })
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="male"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check mx-3 w-full">
                              <input
                                className="form-check-input"
                                type="radio"
                                required={true}
                                name="gender"
                                id="female"
                                value={Gender.FEMALE}
                                checked={
                                  profile.gender === Gender.FEMALE
                                    ? true
                                    : false
                                }
                                onChange={(e) =>
                                  setProfile({
                                    ...profile,
                                    gender: e.target.value,
                                  })
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="female"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="mb-2 text-muted ">
                            DATE OF BIRTH
                          </label>
                          <div className="form-floating mb-3 d-flex align-items-center">
                            <input
                              type="date"
                              className="form-control rounded-5"
                              id="birthday"
                              placeholder="DATE OF BIRTH"
                              value={profile.birthday}
                              defaultValue={profile.birthday}
                              onChange={(e) =>
                                setProfile({
                                  ...profile,
                                  birthday: e.target.value,
                                })
                              }
                            />
                            <label htmlFor="birthday">DATE OF BIRTH</label>
                          </div>
                        </div>
                      </div>

                      <div className="d-grid">
                        <button className="btn btn-primary rounded-5 w-100 text-decoration-none py-3 fw-bold text-uppercase m-0">
                          SAVE PROFILE
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default withAuth(Profile);
