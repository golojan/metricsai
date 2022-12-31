import React from "react";
import Link from "next/link";

function MobilePageSideBar() {
  return (
    <>
      <div
        className="p-2 bg-light offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
      >
        <div className="sidebar-nav mb-3">
          <div className="pb-4 mb-4">
            <Link href="/" className="text-decoration-none">
              <img
                src="img/logo.png"
                className="img-fluid logo"
                alt="brand-logo"
              />
            </Link>
          </div>
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                <span className="material-icons me-3">
                  <img
                    src="img/logo.png"
                    className="img-fluid"
                    alt="brand-logo"
                    width={"22px"}
                    height={"22px"}
                  />
                </span>
                <span>Metrics</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link">
                <span className="material-icons me-3">
                  local_fire_department
                </span>
                <span>Trending</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/auth"
          className="btn btn-primary w-100 text-decoration-none rounded-4 py-3 fw-bold text-uppercase m-0"
        >
          Sign In +
        </Link>
      </div>
    </>
  );
}

export default MobilePageSideBar;
