import React from "react";
import FooterBar from "./FooterBar";
import SocialMenu from "./SocialMenu";
import TopBar from "./TopBar";
import Head from "next/head";
import RightColumn from "./RightColumn";

import { hasAuth } from "../hocs/auth/withAuth";

import RightPageColumn from "./RightPageColumn";
import FixedPageMenu from "./Menus/FixedPageMenu";
import FixedSecureMenu from "./Menus/FixedSecureMenu";
import MobileSecureMenu from "./Menus/MobileSecureMenu";
import MobilePageMenu from "./Menus/MobilePageMenu";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const auth = hasAuth();
  return (
    <>
      <Head>
        <title> Metrics AI | School Ranking System</title>
      </Head>
      <TopBar />
      <SocialMenu />
      <div className="py-4">
        <div className="container">
          <div className="row position-relative">
            {children}
            <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
              {auth ? <FixedSecureMenu /> : <FixedPageMenu />}
              {auth ? <MobileSecureMenu /> : <MobilePageMenu />}
            </aside>
            <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              {auth ? <RightColumn /> : <RightPageColumn />}
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
