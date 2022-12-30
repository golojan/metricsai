import React from "react";
import { authLogin } from "../hocs/auth/withAuth";
import { AccountTypes, Gender } from "../interfaces/enums";

function RegisterTabContents() {
  const [register, setRegister] = React.useState({
    accountType: AccountTypes.GUEST as string,
    firstname: "",
    lastname: "",
    gender: "",
    birthday: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/accounts/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
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
        className="tab-pane fade"
        id="pills-register"
        role="tabpanel"
        aria-labelledby="pills-register-tab"
      >
        <div className="mb-2">
          <header className="profile d-flex align-items-center">
            <img
              alt="#"
              src="/images/avatar/user.png"
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
            <form onSubmit={handleRegister}>
              <div className="row py-3 gy-3 m-0">
                <div className="langauge-item col-12 col-md-4 px-1 mt-2">
                  <input
                    type="radio"
                    required={true}
                    className="btn-check"
                    id="reg_guest"
                    name="accountType"
                    value={AccountTypes.GUEST}
                    defaultChecked
                    onChange={(e) =>
                      setRegister({ ...register, accountType: e.target.value })
                    }
                  />
                  <label
                    htmlFor="reg_guest"
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
                    id="reg_student"
                    name="accountType"
                    value={AccountTypes.STUDENT}
                    onChange={(e) =>
                      setRegister({ ...register, accountType: e.target.value })
                    }
                  />
                  <label
                    htmlFor="reg_student"
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
                    id="reg_lecturer"
                    name="accountType"
                    value={AccountTypes.LECTURER}
                    onChange={(e) =>
                      setRegister({ ...register, accountType: e.target.value })
                    }
                  />
                  <label
                    htmlFor="reg_lecturer"
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
              <div className="row justify-content-center">
                <div className="col-lg-12">
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

                  <div className="row">
                    <div className="col-6">
                      <label className="mb-4 text-muted ">GENDER</label>
                      <div className="d-flex align-items-center mb-3 px-0">
                        <div className="form-check mx-3 w-full">
                          <input
                            className="form-check-input"
                            type="radio"
                            required={true}
                            name="gender"
                            id="male"
                            value={Gender.MALE}
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
                        <div className="form-check mx-3 w-full">
                          <input
                            className="form-check-input"
                            type="radio"
                            required={true}
                            name="gender"
                            id="female"
                            value={Gender.FEMALE}
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
                      </div>
                    </div>
                    <div className="col-6">
                      <label className="mb-2 text-muted ">DATE OF BIRTH</label>
                      <div className="form-floating mb-3 d-flex align-items-center">
                        <input
                          type="date"
                          className="form-control rounded-5"
                          id="birthdat"
                          placeholder="DATE OF BIRTH"
                          onChange={(e) =>
                            setRegister({
                              ...register,
                              birthday: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="birthdat">DATE OF BIRTH</label>
                      </div>
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterTabContents;
