import React, { useEffect, useState } from "react";
import { AuthUserInfo } from "../interfaces";
const cookie = require("js-cookie");

type UProps = {
  user: AuthUserInfo;
};

const ProfileSettingsBox = (props: UProps) => {

  const [settings, setSettings] = React.useState<AuthUserInfo>({
    smsNotification: true,
    emailNotification: false,
  });

  const [run, setRun] = useState(false);

  const token = cookie.get("token");
  const updateSettings = async () => {
    try {
      const res = await fetch(
        `/api/accounts/${token}/update-profile-settings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(settings),
        }
      );
      const { status } = await res.json();
      if (status) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateSettings();
  }, [run]);

  const handleSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSettings({
        ...settings,
        [e.target.name]: true,
      });
    } else {
      setSettings({
        ...settings,
        [e.target.name]: false,
      });
    }
    setRun(!run);
  };

  return (
    <>
      <div className="bg-white p-4 feed-item rounded-4 shadow-sm faq-page">
        <div className="mb-3">
          <h5 className="lead fw-bold text-body mb-0">SETTINGS</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <p className="border-bottom pt-2 d-flex align-items-center mb-0">
              <span>EMAIL NOTIFICATIONS</span>
              <span className="ms-auto form-check form-switch">
                <input
                  className="form-check-input mt-2 ms-0"
                  type="checkbox"
                  id="emailNotification"
                  name="emailNotification"
                  value={1}
                  onChange={handleSettings}
                />
              </span>
            </p>
            <p className="border-bottom pt-2 d-flex align-items-center mb-0">
              <span>SMS NOTIFICATIONS</span>
              <span className="ms-auto form-check form-switch">
                <input
                  className="form-check-input mt-2 ms-0"
                  type="checkbox"
                  id="smsNotification"
                  name="smsNotification"
                  value={1}
                  onChange={handleSettings}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettingsBox;
