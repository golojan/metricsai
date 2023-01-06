import { RefObject, useRef } from "react";
import { NextPage } from "next";
import PublicLayout from "../../components/PublicLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserSnippet } from "../../interfaces";
import useSWR from "swr";
import ProfilePage from "../../components/ProfilePage";
import NoProfilePage from "../../components/NoProfilePage";
import Head from "next/head";

const cookie = require("js-cookie");
const Home: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;

  // use SWR
  const { data: user, error: userError } = useSWR<UserSnippet>(
    `/api/accounts/${username}/checkusername`,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <PublicLayout>
      {user?.status == false ? (
        <Head>
          <title>User @{username} not found!</title>
        </Head>
      ) : (
        <></>
      )}
      <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div className="main-content">
          <div className="tab-content" id="pills-tabContent">
            {user?.status ? <ProfilePage /> : <NoProfilePage />}
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};

export default Home;
