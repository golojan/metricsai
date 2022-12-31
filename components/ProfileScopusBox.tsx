import React from "react";
import { AuthUserInfo } from "../interfaces";

import useSWR from "swr";
import { fetchUserInfo } from "../libs/queries";

function ProfileScopusBox() {
  const { data: profile } = useSWR<AuthUserInfo>(
    "/api/accounts/token/info",
    fetchUserInfo
  );
  const [scopusId, setScopusId] = React.useState<string>(
    profile?.scopusId || ""
  );
  return (
    <>
      <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3 relative">
        <span className="text-muted absolute top-5 right-5">
          <img
            src="/img/scholars/scopus.png"
            className="w-[50px]"
            alt="ScopusID"
          />
        </span>
        <div className="mb-3">
          <h5 className="lead fw-bold text-body mb-0">
            Enter your Scopus Author ID
          </h5>
          <p className="mb-0">Please enter 10 Digits ID from Scopus.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <form action="profile.html">
              <div className="form-floating mb-1 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control rounded-5"
                  placeholder="XXXXXXXXXX"
                  id="scopusId"
                  value={scopusId}
                  onChange={(e) => setScopusId(e.target.value)}
                />

                <label htmlFor="floatingPass">Scopus Author ID</label>
              </div>
              <div className="mb-2 w-full">
                Example:{" "}
                <span className="text-muted">
                  https://www.scopus.com/authid/detail.uri?authorId=
                  <strong className="text-green-700">XXXXXXXXXX</strong>
                </span>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0">
                  Save Scopus
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScopusBox;
