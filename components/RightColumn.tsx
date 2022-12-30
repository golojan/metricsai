import React from "react";
import SearchBar from "./SearchBar";
import WhoToFollow from "./WhoToFollow";
import Link from "next/link";
import TrendBox from "./TrendingBox";
import HashBox from "./HashBox";
import TrendingWith from "./TrendingWith";
import TrendingBox from "./TrendingBox";
import NewsBox from "./NewsBox";
import { useUser } from "@auth0/nextjs-auth0/client";

function RightColumn() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <div className="fix-sidebar">
        <div className="side-trend lg-none">
          <div className="sticky-sidebar2 mb-3">
            <>
              <SearchBar />
              <div className="bg-white rounded-4 overflow-hidden shadow-sm mb-4">
                <h6 className="fw-bold text-body p-3 mb-0 border-bottom">
                  What&apos;s happening
                </h6>
                {/* <TrendingWith />
                <HashBox />
                <TrendingBox />
                <TrendBox />
                <NewsBox /> */}
                <Link href="#" className="text-decoration-none">
                  <div className="p-3">Show More</div>
                </Link>
              </div>
              {/* <WhoToFollow /> */}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightColumn;
