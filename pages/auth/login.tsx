import React from "react";
import Layout from "../../components/Layout";
function login() {
  return (
    <Layout>
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          <div className="mb-2">
            <header className="profile d-flex align-items-center">
              <img
                alt="#"
                src="/img/rmate2.jpg"
                className="rounded-circle me-3"
              />
              <div>
                <span className="text-muted text_short">Welcome Guest</span>
                <h5 className="mb-0 text-dark">
                  <span className="fw-bold">Join the scoreboard!</span>
                </h5>
              </div>
            </header>
          </div>
          <div className="feeds">
            <div className="bg-white p-4 feed-item rounded-4 shadow-sm mb-3 faq-page">
              <div className="mb-3">
                <h5 className="lead fw-bold text-body mb-0">
                  Login to Account
                </h5>
              </div>

              <div className="row py-3 gy-3 m-0">
                <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                  <input
                    type="radio"
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
                      <small className="ln-18">I'm a Guest</small>
                    </span>
                    <span className="material-icons text-muted md-20">
                      check_circle
                    </span>
                  </label>
                </div>

                <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                  <input
                    type="radio"
                    className="btn-check"
                    id="student"
                    name="membership"
                  />
                  <label
                    htmlFor="student"
                    className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                  >
                    <span className="text-start d-grid">
                      <small className="ln-18">I'm a Student</small>
                    </span>
                    <span className="material-icons text-muted md-20">
                      check_circle
                    </span>
                  </label>
                </div>

                <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                  <input
                    type="radio"
                    className="btn-check"
                    id="lecturer"
                    name="membership"
                  />
                  <label
                    htmlFor="lecturer"
                    className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                  >
                    <span className="text-start d-grid">
                      <small className="ln-18">I'm a Lecturer</small>
                    </span>
                    <span className="material-icons text-muted md-20">
                      check_circle
                    </span>
                  </label>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <form action="profile.html">
                    <div className="form-floating mb-3 d-flex align-items-end">
                      <input
                        type="text"
                        className="form-control rounded-5"
                        id="floatingName"
                        defaultValue="AskBootstrap"
                        placeholder="first"
                      />
                      <label htmlFor="floatingName">NAME</label>
                    </div>
                    <div className="form-floating mb-3 d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control rounded-5"
                        id="floatingBirth"
                        defaultValue="01/12/21"
                        placeholder="DATE OF BIRTH"
                      />
                      <label htmlFor="floatingBirth">DATE OF BIRTH</label>
                    </div>
                    <div className="form-floating mb-3 d-flex align-items-center">
                      <input
                        type="email"
                        className="form-control rounded-5"
                        id="floatingEmail"
                        placeholder="iamosahan@gmail.com"
                        defaultValue="iamosahan@gmail.com"
                      />
                      <label htmlFor="floatingEmail">EMAIL</label>
                    </div>
                    <div className="form-floating mb-3 d-flex align-items-center">
                      <input
                        type="password"
                        className="form-control rounded-5"
                        id="floatingPass"
                        placeholder="password"
                        defaultValue={12345678}
                      />
                      <label htmlFor="floatingPass">PASSWORD</label>
                    </div>
                    <label className="mb-2 text-muted small">GENDER</label>
                    <div className="d-flex align-items-center mb-3 px-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="male"
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="female"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="not"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="not">
                          Prefer not to say
                        </label>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary rounded-5 w-100 text-decoration-none py-3 fw-bold text-uppercase m-0">
                        SAVE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3">
              <div className="mb-3">
                <h5 className="lead fw-bold text-body mb-0">
                  Confirm your password
                </h5>
                <p className="mb-0">
                  Please enter your password in order to get this.
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <form action="profile.html">
                    <div className="form-floating mb-3 d-flex align-items-center">
                      <input
                        type="password"
                        className="form-control rounded-5"
                        id="floatingPass"
                        placeholder="password"
                        defaultValue={12345678}
                      />
                      <label htmlFor="floatingPass">PASSWORD</label>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0">
                        Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page">
              <div className="mb-3">
                <h5 className="lead fw-bold text-body mb-0">APP SETTINGS</h5>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <p className="border-bottom py-3 d-flex align-items-center mb-0">
                    <span>AUTOPLAY VIDEOS ON FEED</span>
                    <span className="ms-auto form-check form-switch">
                      <input
                        className="form-check-input mt-2 ms-0"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </p>
                  <p className="pt-3 d-flex align-items-center mb-0">
                    <span>NOTIFICATIONS</span>
                    <span className="ms-auto form-check form-switch">
                      <input
                        className="form-check-input mt-2 ms-0"
                        type="checkbox"
                        id="flexSwitchCheckDsefault"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default login;
