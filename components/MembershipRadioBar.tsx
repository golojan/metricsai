import React from "react";

function MembershipRadioBar() {
  return (
    <>
      <div className="row py-3 gy-3 m-0">
        <div className="langauge-item col-12 col-md-4 px-1 mt-2">
          <input
            type="radio"
            required={true}
            className="btn-check"
            id="guest"
            name="membership"
            defaultChecked
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
    </>
  );
}

export default MembershipRadioBar;
