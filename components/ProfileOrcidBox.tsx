import React from "react";
import { AuthUserInfo } from "../interfaces";

type UProps = {
  profile?: AuthUserInfo;
};

function ProfileOrcidBox(props: UProps) {
  const { profile } = props;
  const [orcidId, setOrcidId] = React.useState<string>(profile?.orcidId || "");
  return (
    <>
      <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3 relative">
        <span className="text-muted absolute top-5 right-5">
          <img
            src="/img/scholars/orcid.png"
            className="w-[50px]"
            alt="ScopusID"
          />
        </span>
        <div className="mb-3">
          <h5 className="lead fw-bold text-body mb-0">
            Enter your Orcid.com Author ID
          </h5>
          <p className="mb-0">Please enter 16 Digits ID from Orcid.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <form action="profile.html">
              <div className="form-floating mb-1 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control rounded-5"
                  placeholder="XXXXXXXXXXXXXXXX"
                  id="orcidId"
                  value={orcidId}
                />

                <label htmlFor="floatingPass">Orcid Author ID</label>
              </div>
              <div className="mb-2 w-full">
                Example:{" "}
                <span className="text-muted">
                  https://orcid.org/
                  <strong className="text-green-700">
                    XXXX-XXXX-XXXX-XXXX
                  </strong>
                </span>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0">
                  Save Orcid
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileOrcidBox;
