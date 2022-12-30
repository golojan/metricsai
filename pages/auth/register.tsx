import React from "react";
import Layout from "../../components/Layout";

function Register() {
  const [register, setRegister] = React.useState({
    membership: "GUEST",
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(register));
  };

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
            <div className="bg-white px-4 py-4 feed-item rounded-4 shadow-sm mb-3 faq-page">
              <div className="row py-3 gy-3 m-0">
                <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                  <input
                    type="radio"
                    required={true}
                    className="btn-check"
                    id="guest"
                    name="membership"
                    defaultChecked
                    onChange={(e) =>
                      setRegister({ ...register, membership: e.target.value })
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
                    onChange={(e) =>
                      setRegister({ ...register, membership: e.target.value })
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
                    onChange={(e) =>
                      setRegister({ ...register, membership: e.target.value })
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
                  <form onSubmit={handleRegister}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-floating mb-3 d-flex align-items-end">
                          <input
                            type="text"
                            required={true}
                            className="form-control rounded-5"
                            placeholder="Firstname"
                            id="Firstname"
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                firstname: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="firstname">FIRST NAME</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating mb-3 d-flex align-items-end">
                          <input
                            type="text"
                            required={true}
                            className="form-control rounded-5"
                            id="lastname"
                            placeholder="Lastname"
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                lastname: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="lastname">LAST NAME</label>
                        </div>
                      </div>
                    </div>

                    <label className="mb-2 text-muted ">GENDER</label>
                    <div className="d-flex align-items-center mb-3 px-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          required={true}
                          name="gender"
                          id="male"
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          required={true}
                          name="gender"
                          id="female"
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          disabled={true}
                          name="gender"
                          id="not"
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label className="form-check-label" htmlFor="not">
                          Prefer not to say
                        </label>
                      </div>
                    </div>
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
                              setRegister({
                                ...register,
                                email: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="emailaddress">EMAIL ADRESS</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div className="form-floating mb-3 d-flex align-items-center">
                          <input
                            type="password"
                            required={true}
                            className="form-control rounded-5"
                            id="password"
                            placeholder="Password"
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                password: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="password">PASSWORD</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating mb-3 d-flex align-items-center">
                          <input
                            type="password"
                            required={true}
                            className="form-control rounded-5"
                            id="confirm-password"
                            placeholder="Password"
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                confirmpassword: e.target.value,
                              })
                            }
                          />
                          <label htmlFor="confirm-password">
                            CONFIRM PASSWORD
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button className="btn btn-primary rounded-5 w-100 text-decoration-none py-3 fw-bold text-uppercase m-0">
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Register;
