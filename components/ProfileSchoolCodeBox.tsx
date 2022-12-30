import React from "react";
import { AuthUserInfo } from "../interfaces";

type UProps = {
  user: AuthUserInfo;
};

function ProfileSchoolCodeBox(props: UProps) {
  const [schoolCode, setSchoolCode] = React.useState("");
  return (
    <>
      <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3">
        <div className="mb-3">
          <h5 className="lead fw-bold text-body mb-0">
            Confirm University Code
          </h5>
          <p className="mb-0">
            Please enter 12 Digits School code from your institution.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <form action="profile.html">
              <div className="form-floating mb-1 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control rounded-5"
                  value={schoolCode as string}
                  id="schoolCode"
                />

                <label htmlFor="floatingPass">UNIVERSITY CODE</label>
              </div>
              <div className="mb-2 w-full">
                In a bid to ensure that only students and lecturers of the
                Universities can access the platform, we have implemented a code
                verification system. Please enter the code you received from
                your institution to confirm your identity.
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
    </>
  );
}

export default ProfileSchoolCodeBox;
