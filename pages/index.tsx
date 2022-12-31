import { NextPage } from "next";
import AllPostFeeds from "./../components/AllPostFeeds";
import Layout from "../components/Layout";
import SearchBarLarge from "./../components/SearchBarLarge";
import { useAtom } from "jotai";
import { tokenAtom } from "./../store/index";

const Home: NextPage = () => {
  const [token] = useAtom(tokenAtom);
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
