import React from "react";
import { AuthUserInfo } from "../interfaces";

type UProps = {
  profile?: AuthUserInfo;
};

function ProfileGoogleScholarBox(props: UProps) {
  const { profile } = props;
  const [googleScholarId, setGoogleScholarId] = React.useState<string>(
    profile?.googleScholarId || ""
  );

  return (
    <>
      <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3 relative">
        <span className="text-muted absolute top-5 right-5">
          <img
            src="/img/scholars/google.png"
            className="w-[120px]"
            alt="GoogleScholarID"
          />
        </span>
        <div className="mb-3">
          <h5 className="lead fw-bold text-body mb-0">
            Enter your Google Scholar Profile URL
          </h5>
          <p className="mb-0">
            Please enter 12 Digits code from your institution.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <form action="profile.html">
              <div className="form-floating mb-1 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control rounded-5"
                  placeholder="XXXXXXXXXXXX"
                  id="googleScholarId"
                  value={googleScholarId}
                />

                <label htmlFor="floatingPass">Google Citation ID</label>
              </div>
              <div className="mb-2 w-full">
                Example:{" "}
                <span className="text-muted">
                  https://scholar.google.com/citations?user=
                  <strong className="text-green-700">XXXXXXXXXXXX</strong>
                  &hl=en
                </span>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileGoogleScholarBox;
