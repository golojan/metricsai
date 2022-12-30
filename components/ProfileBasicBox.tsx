import React from "react";
import { AuthUserInfo } from "../interfaces";
import { AccountTypes, Gender } from "../interfaces/enums";
import withProfile from "../hocs/data/withProfile";
const cookie = require("js-cookie");

type UProps = {
  profile?: AuthUserInfo;
};

const ProfileBasicBox = (props: UProps) => {
  const { profile } = props;
  const [profileState, setProfileState] = React.useState<AuthUserInfo>({
    ...profile,
  });

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = cookie.get("token");
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
                defaultChecked={
                  profileState?.accountType === AccountTypes.GUEST
                    ? true
                    : false
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
                defaultChecked={
                  profile?.accountType === AccountTypes.STUDENT ? true : false
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
                defaultChecked={
                  profile?.accountType === AccountTypes.LECTURER ? true : false
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
                      value={profile?.firstname}
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
                      value={profile?.lastname}
                      placeholder="Lastname"
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
                        defaultChecked={
                          profile?.gender === Gender.MALE ? true : false
                        }
                      />
                      <label className="form-check-label" htmlFor="male">
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
                        defaultChecked={
                          profile?.gender === Gender.FEMALE ? true : false
                        }
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <label className="mb-2 text-muted ">DATE OF BIRTH</label>
                  <div className="form-floating mb-3 d-flex align-items-center">
                    <input
                      type="date"
                      className="form-control rounded-5"
                      id="birthdat"
                      placeholder="DATE OF BIRTH"
                    />
                    <label htmlFor="birthdat">DATE OF BIRTH</label>
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
    </>
  );
};

export default withProfile(ProfileBasicBox);
