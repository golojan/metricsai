import React from "react";

function Modals() {
  return (
    <>
      <div
        className="modal fade"
        id="signModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 p-4 border-0">
            <div className="modal-header border-0 p-1">
              <h6
                className="modal-title fw-bold text-body fs-6"
                id="exampleModalLabel"
              >
                Choose Language
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form>
              <div className="modal-body p-0">
                <div className="row py-3 gy-3 m-0">
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="hindi11"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="hindi11"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">हिंदी</small>
                        <small className="ln-18">Hindi</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="english21"
                      defaultChecked
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="english21"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">English</small>
                        <small className="ln-18">English</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="kannada31"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="kannada31"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">ಕನ್ನಡ</small>
                        <small className="ln-18">kannada</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="tamil41"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="tamil41"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">தமிழ்</small>
                        <small className="ln-18">Tamil</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="punjabi51"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="punjabi51"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">ਪੰਜਾਬੀ</small>
                        <small className="ln-18">Punjabi</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="punjabi5111"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="punjabi5111"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">Türk</small>
                        <small className="ln-18">Turkish</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="punjabi511"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="punjabi511"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">français</small>
                        <small className="ln-18">French</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="other1"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="other1"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">Other</small>
                        <small className="ln-18">Other</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-5 login-register" id="number">
                  <h6 className="fw-bold mx-1 mb-2 text-dark">
                    Register your Mobile Number
                  </h6>
                  <div className="row mx-0 mb-3">
                    <div className="col-3 p-1">
                      <div className="form-floating">
                        <select
                          className="form-select rounded-5"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          <option selected>+91</option>
                          <option value={1}>+34</option>
                          <option value={2}>+434</option>
                          <option value={3}>+343</option>
                        </select>
                        <label htmlFor="floatingSelect">Code</label>
                      </div>
                    </div>
                    <div className="col-9 p-1">
                      <div className="form-floating d-flex align-items-end">
                        <input
                          type="text"
                          className="form-control rounded-5"
                          id="floatingName"
                          defaultValue={1234567890}
                          placeholder="Enter Mobile Number"
                        />
                        <label htmlFor="floatingName">
                          Enter Mobile Number
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <button
                      type="button"
                      className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0"
                      data-bs-dismiss="modal"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="languageModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4 p-4">
            <div className="modal-header border-0 p-1">
              <h6
                className="modal-title fw-bold text-body fs-6 d-flex justify-content-center"
                id="exampleModalLabel1"
              >
                Choose Language
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form>
              <div className="modal-body pt-0 px-0">
                <div className="row py-3 gy-3 m-0">
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="hindi1"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="hindi1"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">हिंदी</small>
                        <small className="ln-18">Hindi</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="english2"
                      defaultChecked
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="english2"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">English</small>
                        <small className="ln-18">English</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="kannada3"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="kannada3"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">ಕನ್ನಡ</small>
                        <small className="ln-18">kannada</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="tamil4"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between"
                      htmlFor="tamil4"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">தமிழ்</small>
                        <small className="ln-18">Tamil</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="punjabi5"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="punjabi5"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">ਪੰਜਾਬੀ</small>
                        <small className="ln-18">Punjabi</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="punjabi511f"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="punjabi511f"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">Türk</small>
                        <small className="ln-18">Turkish</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="punjabi51f"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="punjabi51f"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">français</small>
                        <small className="ln-18">French</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                  <div className="langauge-item col-6 col-md-3 px-1 mt-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="other"
                    />
                    <label
                      className="btn btn-language btn-sm px-2 py-2 rounded-5 d-flex align-items-center justify-content-between mb-2"
                      htmlFor="other"
                    >
                      <span className="text-start d-grid">
                        <small className="ln-18">Other</small>
                        <small className="ln-18">Other</small>
                      </span>
                      <span className="material-icons text-muted md-20">
                        check_circle
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 p-1">
                <button
                  type="button"
                  className="btn btn-primary w-100 text-decoration-none rounded-5 py-3 fw-bold text-uppercase m-0"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="commentModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 overflow-hidden border-0">
            <div className="modal-header d-none">
              <h5 className="modal-title" id="exampleModalLabel2">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-0">
              <div className="row m-0">
                <div className="col-sm-7 px-0 m-sm-none">
                  <div className="image-slider">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={0}
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={1}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={2}
                          aria-label="Slide 3"
                        />
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="img/post-img1.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/post-img2.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="img/post-img3.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 content-body px-web-0">
                  <div className="d-flex flex-column h-600">
                    <div className="d-flex p-3 border-bottom">
                      <img
                        src="img/rmate4.jpg"
                        className="img-fluid rounded-circle user-img"
                        alt="profile-img"
                      />
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <a
                          href="profile.html"
                          className="text-decoration-none ms-3"
                        >
                          <div className="d-flex align-items-center">
                            <h6 className="fw-bold text-body mb-0">
                              iamosahan
                            </h6>
                            <p className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon mb-0">
                              done
                            </p>
                          </div>
                          <p className="text-muted mb-0 small">@johnsmith</p>
                        </a>
                        <div className="small dropdown">
                          <a
                            href="#"
                            className="text-muted text-decoration-none material-icons ms-2 md-"
                            data-bs-dismiss="modal"
                          >
                            close
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="comments p-3">
                      <div className="d-flex mb-2">
                        <img
                          src="img/rmate1.jpg"
                          className="img-fluid rounded-circle"
                          alt="profile-img"
                        />
                        <div className="ms-2 small">
                          <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                            <p className="fw-500 mb-0">Macie Bellis</p>
                            <span className="text-muted">
                              Consectetur adipisicing elit.
                            </span>
                          </div>
                          <div className="d-flex align-items-center ms-2">
                            <a
                              href="#"
                              className="small text-muted text-decoration-none"
                            >
                              Like
                            </a>
                            <span className="fs-3 text-muted material-icons mx-1">
                              circle
                            </span>
                            <a
                              href="#"
                              className="small text-muted text-decoration-none"
                            >
                              Reply
                            </a>
                            <span className="fs-3 text-muted material-icons mx-1">
                              circle
                            </span>
                            <span className="small text-muted">1h</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <img
                          src="img/rmate3.jpg"
                          className="img-fluid rounded-circle"
                          alt="profile-img"
                        />
                        <div className="ms-2 small">
                          <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                            <p className="fw-500 mb-0">John Smith</p>
                            <span className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam.
                            </span>
                          </div>
                          <div className="d-flex align-items-center ms-2">
                            <a
                              href="#"
                              className="small text-muted text-decoration-none"
                            >
                              Like
                            </a>
                            <span className="fs-3 text-muted material-icons mx-1">
                              circle
                            </span>
                            <a
                              href="#"
                              className="small text-muted text-decoration-none"
                            >
                              Reply
                            </a>
                            <span className="fs-3 text-muted material-icons mx-1">
                              circle
                            </span>
                            <span className="small text-muted">20min</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <img
                          src="img/rmate2.jpg"
                          className="img-fluid rounded-circle"
                          alt="profile-img"
                        />
                        <div className="ms-2 small">
                          <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                            <p className="fw-500 mb-0">Shay Jordon</p>
                            <span className="text-muted">
                              With our vastly improved notifications system,
                              users have more control.
                            </span>
                          </div>
                          <div className="d-flex align-items-center ms-2">
                            <a
                              href="#"
                              className="small text-muted text-decoration-none"
                            >
                              Like
                            </a>
                            <span className="fs-3 text-muted material-icons mx-1">
                              circle
                            </span>
                            <a
                              href="#"
                              className="small text-muted text-decoration-none"
                            >
                              Reply
                            </a>
                            <span className="fs-3 text-muted material-icons mx-1">
                              circle
                            </span>
                            <span className="small text-muted">10min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top p-3 mt-auto">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div>
                          <a
                            href="#"
                            className="text-muted text-decoration-none d-flex align-items-start fw-light"
                          >
                            <span className="material-icons md-20 me-2">
                              thumb_up_off_alt
                            </span>
                            <span>30.4k</span>
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-muted text-decoration-none d-flex align-items-start fw-light"
                          >
                            <span className="material-icons md-20 me-2">
                              repeat
                            </span>
                            <span>617</span>
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-muted text-decoration-none d-flex align-items-start fw-light"
                          >
                            <span className="material-icons md-18 me-2">
                              share
                            </span>
                            <span>Share</span>
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons bg-white border-0 text-primary pe-2 md-36">
                          account_circle
                        </span>
                        <div className="d-flex align-items-center border rounded-4 px-3 py-1 w-100">
                          <input
                            type="text"
                            className="form-control form-control-sm p-0 rounded-3 fw-light border-0"
                            placeholder="Write Your comment"
                          />
                          <a
                            href="#"
                            className="bg-white border-0 text-primary ps-2 text-decoration-none"
                          >
                            Post
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-none" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
