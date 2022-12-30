import React from "react";
import withProfile from "../hocs/data/withProfile";
import { AuthUserInfo } from "../interfaces";

type UProps = {
  profile?: AuthUserInfo;
};

const ProfileAvatarBlock = (props: UProps) => {
  const { profile } = props;
  return (
    <>
      <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page mb-3">
        <div className="mb-3">
          <h5 className="lead fw-bold text-body mb-0">Upload Photo</h5>
          <p className="mb-0">
            Please upload your real face for profile photo. Memes and avatars
            will be rejected. Our team will review your photo and approve it
            against you valid ID verification may be required.
          </p>
          <header className="profile d-flex align-items-center mt-4">
            <img
              alt="#"
              src={profile?.picture}
              className="rounded-circle me-3"
            />
            <div>
              <span className="text-muted text_short">How are you doing</span>
              <h5 className="mb-0 text-dark">
                <span className="fw-bold">
                  {profile?.lastname} {profile?.firstname}
                </span>
              </h5>
            </div>
          </header>
        </div>
      </div>

      <div className="mb-3"></div>
    </>
  );
};

export default withProfile(ProfileAvatarBlock);
