import { NextPage } from "next";
import SlickSlider from "../../components/SlickSlider";
import StatusTextBox from "../../components/StatusTextBox";
import TabsBar from "../../components/TabsBar";
import AllPostFeeds from "./../../components/AllPostFeeds";
import Layout from "../../components/Layout";
import { withAuth } from "../../hocs/auth/withAuth";

const Metrics: NextPage = () => {
  return (
    <Layout>
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          <TabsBar />
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-feed"
              role="tabpanel"
              aria-labelledby="pills-feed-tab"
            >
              <StatusTextBox />
              <div>
                <SlickSlider />
                <div className="pt-4 feeds">
                  <AllPostFeeds />
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-people"
              role="tabpanel"
              aria-labelledby="pills-people-tab"
            >
              <h6 className="mb-3 fw-bold text-body">People you can follow</h6>
              <div className="bg-white rounded-4 overflow-hidden mb-4 shadow-sm">
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate5.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      Webartinfo
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div className="text-muted fw-light">
                      <p className="mb-1 small">@abcdsec</p>
                      <span className="text-muted d-flex align-items-center small">
                        <span className="material-icons me-1 small">
                          open_in_new
                        </span>
                        Promoted
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate4.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      John Smith
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="fw-light text-muted mb-1 small">
                        @johnsmith
                      </p>
                      <span className="d-flex align-items-center small">
                        Designer
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate3.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      Konex
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="text-muted fw-light mb-1 small">@Konex</p>
                      <span className="d-flex align-items-center small">
                        Artist/Author/Motivational Speaker
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
              </div>
              <h6 className="mb-3 fw-bold text-body">Popular</h6>
              <div className="bg-white rounded-4 overflow-hidden mb-4 shadow-sm">
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate2.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      Anushuka Shetty
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div className="text-muted fw-light">
                      <p className="mb-1 small">@anushuka</p>
                      <span className="text-muted d-flex align-items-center small">
                        <span className="material-icons me-1 small">
                          open_in_new
                        </span>
                        Promoted
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate4.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      John Smith
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="fw-light text-muted mb-1 small">
                        @johnsmith
                      </p>
                      <span className="d-flex align-items-center small">
                        Actress
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate6.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      William Smith
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="text-muted fw-light mb-1 small">
                        @williamsmith
                      </p>
                      <span className="d-flex align-items-center small">
                        Motivational Speaker
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
              </div>
              <h6 className="mb-3 fw-bold text-body">
                News Papers &amp; Channels
              </h6>
              <div className="bg-white rounded-4 overflow-hidden mb-4 shadow-sm">
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate5.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      Webartinfo
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div className="text-muted fw-light">
                      <p className="mb-1 small">@abcdsec</p>
                      <span className="text-muted d-flex align-items-center small">
                        <span className="material-icons me-1 small">
                          open_in_new
                        </span>
                        Promoted
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate4.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      John Smith
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="fw-light text-muted mb-1 small">
                        @johnsmith
                      </p>
                      <span className="d-flex align-items-center small">
                        Designer
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate3.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      Konex
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="text-muted fw-light mb-1 small">@Konex</p>
                      <span className="d-flex align-items-center small">
                        Artist/Author/Motivational Speaker
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
              </div>
              <h6 className="mb-3 fw-bold text-body">Politicians</h6>
              <div className="bg-white rounded-4 overflow-hidden mb-4 shadow-sm">
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate2.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      Anushuka Shetty
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div className="text-muted fw-light">
                      <p className="mb-1 small">@anushuka</p>
                      <span className="text-muted d-flex align-items-center small">
                        <span className="material-icons me-1 small">
                          open_in_new
                        </span>
                        Promoted
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 border-bottom d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate4.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      John Smith
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="fw-light text-muted mb-1 small">
                        @johnsmith
                      </p>
                      <span className="d-flex align-items-center small">
                        Actress
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
                <a
                  href="profile.html"
                  className="p-3 d-flex text-dark text-decoration-none account-item pf-item"
                >
                  <img
                    src="img/rmate6.jpg"
                    className="img-fluid rounded-circle me-3"
                    alt="profile-img"
                  />
                  <div>
                    <p className="fw-bold mb-0 pe-3 d-flex align-items-center">
                      William Smith
                      <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                        done
                      </span>
                    </p>
                    <div>
                      <p className="text-muted fw-light mb-1 small">
                        @williamsmith
                      </p>
                      <span className="d-flex align-items-center small">
                        Motivational Speaker
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <span className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                      + Follow
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-trending"
              role="tabpanel"
              aria-labelledby="pills-trending-tab"
            >
              <div
                className="input-group shadow-sm mb-3 rounded-4 overflow-hidden py-2 bg-white"
                data-bs-toggle="modal"
                data-bs-target="#postModal"
              >
                <span className="input-group-text material-icons border-0 bg-white text-primary">
                  account_circle
                </span>
                <input
                  type="text"
                  className="form-control border-0 fw-light ps-1"
                  placeholder="What's on your mind."
                />
                <a
                  href="#"
                  className="text-decoration-none input-group-text bg-white border-0 material-icons text-primary"
                >
                  add_circle
                </a>
              </div>
              <div className="feeds">
                <div className="bg-white p-3 feed-item rounded-4 mb-3 shadow-sm">
                  <div className="d-flex">
                    <img
                      src="img/rmate1.jpg"
                      className="img-fluid rounded-circle user-img"
                      alt="profile-img"
                    />
                    <div className="d-flex ms-3 align-items-start w-100">
                      <div>
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            href="profile.html"
                            className="text-decoration-none d-flex align-items-center"
                          >
                            <h6 className="fw-bold mb-0 text-body">
                              Shay Jordon
                            </h6>
                            <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                              done
                            </span>
                            <small className="text-muted ms-2">
                              @shay-jordon
                            </small>
                          </a>
                          <div className="d-flex align-items-center small">
                            <p className="text-muted mb-0">19 Feb</p>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="text-muted text-decoration-none material-icons ms-2 md-20 rounded-circle bg-light p-1"
                                id="dropdownMenuButton3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                more_vert
                              </a>
                              <ul
                                className="dropdown-menu fs-13 dropdown-menu-end"
                                aria-labelledby="dropdownMenuButton3"
                              >
                                <li>
                                  <a
                                    className="dropdown-item text-muted"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1">
                                      edit
                                    </span>
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-muted"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1">
                                      delete
                                    </span>
                                    Delete
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-muted"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1 ltsp-n5">
                                      arrow_back_ios arrow_forward_ios
                                    </span>
                                    Embed Vogel
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-muted d-flex align-items-center"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1">
                                      share
                                    </span>
                                    Share via another apps
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="my-2">
                          <p>
                            Congue aliquam scripserit eam ex, vis ad prompta
                            mnesarchum, ad atqui suscipit vel. Omnis soluta ut
                            mel, eum consequat adversarium definitionem ei. Sit
                            cu elit laboramus similique, error exerci tacimates
                            nam eu. Ferri eirmod latine ex sit. Cu nec munere
                            viderer. Vix inermis periculis abhorreant te. Augue
                            homero prompta eum eu, no est discere commune, velit
                            mentitum vis ne. 🙂
                          </p>
                          <p className="text-dark">Happy Vogel to you!</p>
                          <a
                            href="#"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                            data-bs-target="#commentModal"
                          >
                            <img
                              src="img/post1.png"
                              className="img-fluid rounded mb-3"
                              alt="post-img"
                            />
                          </a>
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
                                  chat_bubble_outline
                                </span>
                                <span>4.0k</span>
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
                          <div
                            className="d-flex align-items-center mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#commentModal"
                          >
                            <span className="material-icons bg-white border-0 text-primary pe-2 md-36">
                              account_circle
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-sm rounded-3 fw-light"
                              placeholder="Write Your comment"
                            />
                          </div>
                          <div className="comments">
                            <div className="d-flex mb-2">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                                data-bs-toggle="modal"
                                data-bs-target="#commentModal"
                              >
                                <img
                                  src="img/rmate1.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="commenters-img"
                                />
                              </a>
                              <div className="ms-2 small">
                                <a
                                  href="#"
                                  className="text-dark text-decoration-none"
                                  data-bs-toggle="modal"
                                  data-bs-target="#commentModal"
                                >
                                  <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                                    <p className="fw-500 mb-0">Macie Bellis</p>
                                    <span className="text-muted">
                                      Consectetur adipisicing elit, sed do
                                      eiusmod tempor incididunt ut labore et
                                      dolor.
                                    </span>
                                  </div>
                                </a>
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
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                                data-bs-toggle="modal"
                                data-bs-target="#commentModal"
                              >
                                <img
                                  src="img/rmate3.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="commenters-img"
                                />
                              </a>
                              <div className="ms-2 small">
                                <a
                                  href="#"
                                  className="text-dark text-decoration-none"
                                  data-bs-toggle="modal"
                                  data-bs-target="#commentModal"
                                >
                                  <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                                    <p className="fw-500 mb-0">John Smith</p>
                                    <span className="text-muted">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam.
                                    </span>
                                  </div>
                                </a>
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
                                  <span className="small text-muted">
                                    20min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-2">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                                data-bs-toggle="modal"
                                data-bs-target="#commentModal"
                              >
                                <img
                                  src="img/rmate2.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="commenters-img"
                                />
                              </a>
                              <div className="ms-2 small">
                                <a
                                  href="#"
                                  className="text-dark text-decoration-none"
                                  data-bs-toggle="modal"
                                  data-bs-target="#commentModal"
                                >
                                  <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                                    <p className="fw-500 mb-0">Shay Jordon</p>
                                    <span className="text-muted">
                                      With our vastly improved notifications
                                      system, users have more control.
                                    </span>
                                  </div>
                                </a>
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
                                  <span className="small text-muted">
                                    10min
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 feed-item rounded-4 mb-3 shadow-sm">
                  <div className="d-flex">
                    <img
                      src="img/rmate4.jpg"
                      className="img-fluid rounded-circle user-img"
                      alt="profile-img"
                    />
                    <div className="d-flex ms-3 align-items-start w-100">
                      <div>
                        <div className="d-flex align-items-center justify-content-between">
                          <a
                            href="profile.html"
                            className="text-decoration-none d-flex align-items-center"
                          >
                            <h6 className="fw-bold mb-0 text-body">
                              John Smith
                            </h6>
                            <span className="ms-2 material-icons bg-primary p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                              done
                            </span>
                            <small className="text-muted ms-2">
                              @johnsmith
                            </small>
                          </a>
                          <div className="d-flex align-items-center small">
                            <p className="text-muted mb-0">19 Feb</p>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="text-muted text-decoration-none material-icons ms-2 md-20 rounded-circle bg-light p-1"
                                id="dropdownMenuButton4"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                more_vert
                              </a>
                              <ul
                                className="dropdown-menu fs-13 dropdown-menu-end"
                                aria-labelledby="dropdownMenuButton4"
                              >
                                <li>
                                  <a
                                    className="dropdown-item text-muted"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1">
                                      edit
                                    </span>
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-muted"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1">
                                      delete
                                    </span>
                                    Delete
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-muted"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1 ltsp-n5">
                                      arrow_back_ios arrow_forward_ios
                                    </span>
                                    Embed Vogel
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-muted d-flex align-items-center"
                                    href="#"
                                  >
                                    <span className="material-icons md-13 me-1">
                                      share
                                    </span>
                                    Share via another apps
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="my-2">
                          <p>
                            Nam malis menandri ea, facete debitis volumus est
                            ut, commune placerat nominati ei sea. Labore alterum
                            probatus no sed, ius ea quas iusto inermis, ex
                            tantas populo nonumes nam. Quo ad verear copiosae
                            gubergren, quis commodo est et.
                          </p>
                          <a
                            href="#"
                            className="text-decoration-none"
                            data-bs-toggle="modal"
                            data-bs-target="#commentModal"
                          >
                            <img
                              src="img/post2.png"
                              className="img-fluid rounded mb-3"
                              alt="post-img"
                            />
                          </a>
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
                                  chat_bubble_outline
                                </span>
                                <span>4.0k</span>
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
                          <div
                            className="d-flex align-items-center mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#commentModal"
                          >
                            <span className="material-icons bg-white border-0 text-primary pe-2 md-36">
                              account_circle
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-sm rounded-3 fw-light"
                              placeholder="Write Your comment"
                            />
                          </div>
                          <div className="comments">
                            <div className="d-flex mb-2">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                                data-bs-toggle="modal"
                                data-bs-target="#commentModal"
                              >
                                <img
                                  src="img/rmate1.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="commenters-img"
                                />
                              </a>
                              <div className="ms-2 small">
                                <a
                                  href="#"
                                  className="text-dark text-decoration-none"
                                  data-bs-toggle="modal"
                                  data-bs-target="#commentModal"
                                >
                                  <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                                    <p className="fw-500 mb-0">Macie Bellis</p>
                                    <span className="text-muted">
                                      Consectetur adipisicing elit, sed do
                                      eiusmod tempor incididunt ut labore et
                                      dolor.
                                    </span>
                                  </div>
                                </a>
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
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                                data-bs-toggle="modal"
                                data-bs-target="#commentModal"
                              >
                                <img
                                  src="img/rmate3.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="commenters-img"
                                />
                              </a>
                              <div className="ms-2 small">
                                <a
                                  href="#"
                                  className="text-dark text-decoration-none"
                                  data-bs-toggle="modal"
                                  data-bs-target="#commentModal"
                                >
                                  <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                                    <p className="fw-500 mb-0">John Smith</p>
                                    <span className="text-muted">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam.
                                    </span>
                                  </div>
                                </a>
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
                                  <span className="small text-muted">
                                    20min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-2">
                              <a
                                href="#"
                                className="text-dark text-decoration-none"
                                data-bs-toggle="modal"
                                data-bs-target="#commentModal"
                              >
                                <img
                                  src="img/rmate2.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="commenters-img"
                                />
                              </a>
                              <div className="ms-2 small">
                                <a
                                  href="#"
                                  className="text-dark text-decoration-none"
                                  data-bs-toggle="modal"
                                  data-bs-target="#commentModal"
                                >
                                  <div className="bg-light px-3 py-2 rounded-4 mb-1 chat-text">
                                    <p className="fw-500 mb-0">Shay Jordon</p>
                                    <span className="text-muted">
                                      With our vastly improved notifications
                                      system, users have more control.
                                    </span>
                                  </div>
                                </a>
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
                                  <span className="small text-muted">
                                    10min
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default withAuth(Metrics);
