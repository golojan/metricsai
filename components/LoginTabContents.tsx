import React from "react";
import { authLogin } from "../hocs/auth/withAuth";
import { AccountTypes } from "../interfaces/enums";

function LoginTabContents() {
  const [login, setLogin] = React.useState({
    username: "",
    password: "",
    membership: AccountTypes.GUEST as string,
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const { status, token } = await response.json();
    if (status) {
      authLogin(token);
    } else {
      alert("Invalid Username and Password.");
    }
  };

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="pills-login-tab"
      >
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
          <div className="bg-white px-4 py-4 feed-item rounded-4 shadow-sm mb-3 faq-page">
            <form onSubmit={handleLogin}>
              <div className="row py-3 gy-3 m-0">
                <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                  <input
                    type="radio"
                    required={true}
                    className="btn-check"
                    id="guest"
                    name="membership"
                    value={AccountTypes.GUEST}
                    defaultChecked
                    onChange={(e) =>
                      setLogin({ ...login, membership: e.target.value })
                    }
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
                    required={true}
                    className="btn-check"
                    id="student"
                    name="membership"
                    value={AccountTypes.STUDENT}
                    onChange={(e) =>
                      setLogin({ ...login, membership: e.target.value })
                    }
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
                    required={true}
                    className="btn-check"
                    id="lecturer"
                    name="membership"
                    value={AccountTypes.LECTURER}
                    onChange={(e) =>
                      setLogin({ ...login, membership: e.target.value })
                    }
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
                  <div className="row">
                    <div className="col-12">
                      <div className="form-floating mb-3 d-flex align-items-end">
                        <input
                          type="email"
                          required={true}
                          className="form-control rounded-5"
                          id="emailaddress"
                          placeholder="Email Address"
                          onChange={(e) =>
                            setLogin({
                              ...login,
                              username: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="emailaddress">EMAIL ADRESS</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-floating mb-3 d-flex align-items-center">
                        <input
                          type="password"
                          required={true}
                          className="form-control rounded-5"
                          id="password"
                          placeholder="Password"
                          onChange={(e) =>
                            setLogin({
                              ...login,
                              password: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="password">PASSWORD</label>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary rounded-5 w-100 text-decoration-none py-3 fw-bold text-uppercase m-0">
                      LOGIN
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginTabContents;
