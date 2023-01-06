import { NextPage } from "next";
import AllPostFeeds from "./../components/AllPostFeeds";
import Layout from "../components/Layout";
import SearchBarLarge from "../components/SearchBarLarge";
import StatusTextBox from "../components/StatusTextBox";
import TabsBar from "../components/TabsBar";
import { AdBox } from "../components/AdBox";
import HomeTabsBar from "../components/HomeTabsBar";

import SlickSlider from "../components/SlickSlider";

import HomeTabContentMetrics from "./../components/HomeTabContentMetrics";
import HomeTabContentNews from "../components/HomeTabContentNews";
import TabContentFeeds from "../components/TabContentFeeds";
import TabContentLecturers from "../components/TabContentLecturers";
import TabContentStudents from "../components/TabContentStudents";
import TabContentTrending from "../components/TabContentTrending";
import { hasAuth } from "../hocs/auth/withAuth";

const cookie = require("js-cookie");
const Home: NextPage = () => {
  const auth = hasAuth();
  return (
    <Layout>
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          {auth ? <TabsBar /> : null}
          {auth ? <></> : <SearchBarLarge />}
          <div className="tab-content" id="pills-tabContent">
            {auth ? (
              <>
                <TabContentFeeds />
                <TabContentLecturers />
                <TabContentStudents />
                <TabContentTrending />
              </>
            ) : (
              <>
                <div className="feeds">
                  <div className="bg-white p-3 feed-item rounded-4 mb-3 shadow-sm">
                    <div className="d-flex">
                      <img
                        src="/img/rmate2.jpg"
                        className="img-fluid rounded-circle user-img"
                        alt="profile-img"
                      />
                      <div className="d-flex ms-3 align-items-start w-100">
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <a
                              href="#"
                              className="text-decoration-none d-flex align-items-center"
                            >
                              <h6 className="fw-bold mb-0 text-body">
                                Agu Stanley
                              </h6>
                              <span className="ms-2 material-icons bg-gray-300 p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                                done
                              </span>
                              <small className="text-muted ms-2">
                                @aguchux
                              </small>
                            </a>
                            <div className="d-flex align-items-center small">
                              <p className="text-muted mb-0">19 Jan</p>
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-muted text-decoration-none material-icons ms-2 md-20 rounded-circle bg-light p-1"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  more_vert
                                </a>
                                <ul
                                  className="dropdown-menu fs-13 dropdown-menu-end"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <a
                                      className="dropdown-item text-muted d-flex align-items-center"
                                      href="#"
                                    >
                                      <span className="material-icons md-13 me-1">
                                        share
                                      </span>
                                      Share Post
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="my-2">
                            <p className="mb-3 text-primary">
                              Welcome to the Metrics Ranking system, where we
                              help our Universities rank better 🙂
                            </p>
                            <p className="mb-3">
                              We are excited to have you here. We are a
                              community of students, lecturers, and
                              professionals who believe in the power of
                              knowledge sharing. We believe that knowledge is
                              power and that we can achieve more when we share
                              our knowledge with others.
                            </p>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>
                                <a
                                  href="#"
                                  className="text-muted text-decoration-none d-flex align-items-start fw-light"
                                >
                                  <span className="material-icons md-20 me-2">
                                    thumb_up_off_alt
                                  </span>
                                  <span>0</span>
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
                                  <span>0</span>
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
                                  <span>0</span>
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

                            <div className="d-flex align-items-center mb-3">
                              <span className="material-icons bg-white border-0 text-primary pe-2 md-36">
                                account_circle
                              </span>
                              <input
                                type="text"
                                className="form-control form-control-sm rounded-3 fw-light h-auto"
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
                                    src="/img/rmate1.jpg"
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
                                      <p className="fw-500 mb-0">
                                        Macie Bellis
                                      </p>
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
                                    src="/img/rmate3.jpg"
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
              </>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
