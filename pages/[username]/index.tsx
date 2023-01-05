import { NextPage } from "next";
import PublicLayout from "../../components/PublicLayout";
import SearchBarLarge from "../../components/SearchBarLarge";
import HomeTabsBar from "../../components/HomeTabsBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthUserInfo, SchoolInfo } from "../../interfaces";
import { useEffect, useState } from "react";
import { getProfile, getSchools } from "../../libs/queries";

const cookie = require("js-cookie");
const Home: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  //
  const [schools, setSchools] = useState<[SchoolInfo]>([{} as SchoolInfo]);
  const [profile, setProfile] = useState<AuthUserInfo>({});

  useEffect(() => {
    getSchools().then((res) => {
      setSchools(res);
    });
    getProfile(username as string).then((res: AuthUserInfo) => {
      setProfile(res);
    });
  }, [username]);

  return (
    <PublicLayout>
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          <div className="tab-content" id="pills-tabContent">
            <div className="mb-4 d-flex align-items-center">
              <div className="d-flex align-items-center px-2">
                <Link
                  href={`/${username}`}
                  className="material-icons text-dark text-decoration-none m-none"
                >
                  arrow_back
                </Link>
                <p className="ms-2 mb-0 fw-bold text-body fs-6 ml-3">
                  David Nweze Umahi Federal University of Medical Sciences,
                  Uburu.
                </p>
              </div>
              <Link
                href="#"
                className="text-decoration-none material-icons md-20 ms-auto text-muted"
              >
                share
              </Link>
            </div>

            <div className="bg-white rounded shadow-sm profile">
              {/* <div className="w-full min-h-[200px] bg-black rounded-t-lg"></div> */}
              <div className="d-flex align-items-center px-3 pt-4">
                <img
                  src={`${profile.picture}`}
                  className="img-profile rounded-circle"
                  alt="profile-img"
                />
                <div className="ms-3 clear-both">
                  <h6 className="mb-0 d-flex align-items-start text-body fs-6 fw-bold">
                    {` ${profile.lastname} ${profile.firstname} `}
                    <span className="ms-2 material-icons bg-gray-400 p-0 md-16 fw-bold text-white rounded-circle ov-icon">
                      done
                    </span>
                  </h6>
                  <p className="text-muted mb-0">{`@${profile.username}`}</p>
                  <span className="clear-both text-md">
                    Medicine and Surgery
                  </span>
                </div>

                <div
                  className="ms-auto btn-group"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input type="checkbox" className="btn-check" id="btncheck1" />
                  <label
                    className="btn btn-outline-primary btn-sm px-3 rounded-pill"
                    htmlFor="btncheck1"
                  >
                    <span className="follow">connect</span>
                    <span className="following d-none">connected</span>
                  </label>
                </div>
              </div>

              <div className="p-3">
                {" "}
                <p className="d-flex flex-row align-items-center mb-3">
                  <span className="material-icons me-2 rotate-320 text-muted md-16">
                    link
                  </span>
                  <a href={`/${username}`} className="text-decoration-none">
                    {`metrics.com/${username}`}
                  </a>
                  <span className="material-icons me-2 text-muted md-16 ms-4">
                    calendar_today
                  </span>
                  <span>Joined on Feb 2021</span>

                  <span className="material-icons me-2 text-muted md-16 ms-4">
                    face
                  </span>
                  <span>
                    <strong>0</strong> Views
                  </span>
                </p>
                <div className="p mb-2 p-2 bg-[#edf2f6] rounded-4 fs-6 text-gray-700 hover:text-gray-700">
                  {profile.aboutMe}
                </div>
                <hr />
                <div className="d-flex followers">
                  <div className="ms-0 ps-0">
                    <p className="mb-0">
                      <strong>0</strong>{" "}
                      <span className="text-muted">Connections</span>
                    </p>
                    {/* <div className="d-flex">
                      <img
                        src="img/rmate1.jpg"
                        className="img-fluid rounded-circle"
                        alt="follower-img"
                      />
                    </div> */}
                  </div>
                  <div className="ms-5 ps-5">
                    <p className="mb-0">
                      <strong>0</strong>{" "}
                      <span className="text-muted">Students</span>
                    </p>
                    {/* <div className="d-flex">
                      <img
                        src="img/rmate3.jpg"
                        className="img-fluid rounded-circle"
                        alt="follower-img"
                      />
                    </div> */}
                  </div>
                  <div className="ms-5 ps-5">
                    <p className="mb-0">
                      <strong>0</strong>{" "}
                      <span className="text-muted">Lecturers</span>
                    </p>
                    {/* <div className="d-flex">
                      <img
                        src="img/rmate1.jpg"
                        className="img-fluid rounded-circle"
                        alt="follower-img"
                      />
                    </div> */}
                  </div>
                </div>
                <hr className="mb-2" />
                <div className="row d-flex mt-0">
                  <div className="col-12 mb-2 mt-0 text-black text-lg">
                    Google Scholar
                  </div>
                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>Citations</em>
                  </div>

                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>H-Index</em>
                  </div>

                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>i-10-Index</em>
                  </div>

                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>Metrix Rank</em>
                  </div>
                </div>
                <hr />
                <div className="row d-flex mt-0">
                  <div className="col-12 mb-2 mt-0 text-black text-lg">
                    Scopus Scholar
                  </div>
                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>Citations</em>
                  </div>

                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>H-Index</em>
                  </div>

                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>i-10-Index</em>
                  </div>

                  <div className="col-3 text-center">
                    <div className="m-0 p-0 h2 text-center">0</div>
                    <em>Metrix Rank</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};

export default Home;
