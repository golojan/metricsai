import { NextPage } from "next";
import SlickSlider from "../components/SlickSlider";
import StatusTextBox from "../components/StatusTextBox";
import TabsBar from "../components/TabsBar";
import AllPostFeeds from "./../components/AllPostFeeds";
import Layout from "../components/Layout";
import SearchBarLarge from "./../components/SearchBarLarge";
const cookie = require("js-cookie");

const Home: NextPage = () => {
  const token = cookie.get("token");
  return (
    <Layout>
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          <div className="tab-content" id="pills-tabContent">
            {token ? null : <SearchBarLarge />}
            <div className="pt-4 feeds">
              <AllPostFeeds />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
