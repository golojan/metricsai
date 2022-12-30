import React from "react";
import Link from "next/link";

function MobileSideBar() {
  return (
    <>
      <div
        className="p-2 bg-light offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
      >
        <div className="sidebar-nav mb-3">
          <div className="pb-4 mb-4 d-none">
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

            <li className="nav-item">
              <Link href="/" className="nav-link">
                <span className="material-icons me-3">house</span>
                <span>Feed</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="profile.html" className="nav-link">
                <span className="material-icons me-3">account_circle</span>
                <span>Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="explore.html" className="nav-link">
                <span className="material-icons me-3">explore</span>
                <span>Explore</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link">
                <span className="material-icons me-3">logout</span>
                <span>Logout</span>
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="offcanvasNavbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="material-icons me-3">web</span> Pages
              </a>
              <ul
                className="dropdown-menu px-2 py-1 mb-2"
                aria-labelledby="offcanvasNavbarDropdown"
              >
                <li>
                  <a
                    className="dropdown-item rounded-3 px-2 py-1 my-1"
                    href="contact.html"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item rounded-3 px-2 py-1 my-1"
                    href="faq.html"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item rounded-3 px-2 py-1 my-1"
                    href="404.html"
                  >
                    404 Error
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item rounded-3 px-2 py-1 my-1"
                    href="edit-profile.html"
                  >
                    Edit Profile
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <Link
          href="#"
          className="btn btn-primary w-100 text-decoration-none rounded-4 py-3 fw-bold text-uppercase m-0"
          data-bs-toggle="modal"
          data-bs-target="#signModal"
        >
          Sign In +
        </Link>
      </div>
    </>
  );
}

export default MobileSideBar;
