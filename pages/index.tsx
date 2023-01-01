import { NextPage } from "next";
import AllPostFeeds from "./../components/AllPostFeeds";
import Layout from "../components/Layout";
import SearchBarLarge from "../components/SearchBarLarge";
import StatusTextBox from "../components/StatusTextBox";
const cookie = require("js-cookie");
const Home: NextPage = () => {
  const token = cookie.get("token");
  return (
    <Layout>
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          <div className="tab-content" id="pills-tabContent">
            {token ? <StatusTextBox /> : <SearchBarLarge />}
            <div className="feeds">
              <AllPostFeeds />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
