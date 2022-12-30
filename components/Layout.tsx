import React from "react";
import FooterBar from "./FooterBar";
import SocialMenu from "./SocialMenu";
import TopBar from "./TopBar";
import Head from "next/head";
import MobileSideBar from "./MobileSideBar";
import FixedSideBar from "./FixedSideBar";
import RightColumn from "./RightColumn";

const cookie = require("js-cookie");
import useSWR from "swr";

import { getUserInfo } from "../libs/queries";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  const router = useRouter();
  const token = cookie.get("token");
  const { data: Profile, error } = useSWR(
    `/api/accounts/${token}/profile`,
    getUserInfo
  );
  return (
    <>
      <Head>
        <title>Metrics AI</title>
      </Head>
      <TopBar />
      <SocialMenu />

      <div className="py-4">
        <div className="container">
          <div className="row position-relative">
            {children}
            <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
              <MobileSideBar />
              <FixedSideBar />
            </aside>
            <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              <RightColumn />
            </aside>
          </div>
        </div>
      </div>

      <div className="py-3 bg-white footer-copyright">
        <FooterBar />
      </div>
    </>
  );
}

export default Layout;
