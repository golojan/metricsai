import Link from "next/link";
import React from "react";

function FooterBar() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <span className="me-3">
              ©2021 <b className="text-primary">Metrics AI Ranking System</b>.
              All rights reserved
            </span>
          </div>
          <div className="col-md-4 text-end">
            <Link
              target="_blank"
              href="#"
              className="btn social-btn btn-sm text-decoration-none"
            >
              <i className="icofont-facebook" />
            </Link>
            <Link
              target="_blank"
              href="#"
              className="btn social-btn btn-sm text-decoration-none"
            >
              <i className="icofont-twitter" />
            </Link>
            <Link
              target="_blank"
              href="#"
              className="btn social-btn btn-sm text-decoration-none"
            >
              <i className="icofont-linkedin" />
            </Link>
            <Link
              target="_blank"
              href="#"
              className="btn social-btn btn-sm text-decoration-none"
            >
              <i className="icofont-youtube-play" />
            </Link>
            <Link
              target="_blank"
              href="#"
              className="btn social-btn btn-sm text-decoration-none"
            >
              <i className="icofont-instagram" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBar;
