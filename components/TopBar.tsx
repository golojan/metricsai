import Link from "next/link";
import React from "react";
import SocialMenu from "./SocialMenu";

function TopBar() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#5e87c4] to-[#3266af] min-h-[10px] m-0 pt-[50px] pb-[10px]">
        <div className="container">
          <div className="flex flex-row justify-between items-center h-full">
            <div className="row">
              <div className="col-4 col-sm-12 ol-xs-12">
                <div className="logo sm:text-center">
                  <Link href="/" className="text-white text-2xl font-bold">
                    <img src="/img/logo.png" height={50} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="d-none">
                <div className="flex flex-row text-center align-middle justify-end items-center h-full">
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>{" "}
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>{" "}
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>{" "}
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>{" "}
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>{" "}
                  <Link href="/" className="text-white mx-3 h5">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
