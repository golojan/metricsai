import React, { useEffect, useState } from "react";
import { AuthUserInfo } from "../interfaces";

import { useAtom } from "jotai";
import { tokenAtom } from "../store/index";
import useSWR from "swr";
import { fetchUserInfo } from "../libs/queries";

const ProfileSettingsBox = () => {
  const [token] = useAtom<string>(tokenAtom);
  const { data: profile } = useSWR<AuthUserInfo>(
    "/api/accounts/token/info",
    fetchUserInfo
  );
  const [settings, setSettings] = React.useState<AuthUserInfo>({
    smsNotification: profile?.smsNotification,
    emailNotification: profile?.emailNotification,
  });

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

  const handleSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSettings({
        ...settings,
        [e.target.name]: 1,
      });
    } else {
      setSettings({
        ...settings,
        [e.target.name]: 0,
      });
    }
    updateSettings();
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
                  checked={settings.emailNotification === 1 ? true : false}
                  value={1}
                  onChange={handleSettings}
                />
              </span>
            </p>
            <p className="border-bottom pt-2 d-flex align-items-center mb-0">
              <span>SMS NOTIFICATIONS {settings.smsNotification}</span>
              <span className="ms-auto form-check form-switch">
                <input
                  className="form-check-input c mt-2 ms-0"
<dl class="row">
  <dt class="col-sm-3">o?
  
  
  
  
  
  
  
  
  
  
  
  
  '</dt>
  <dd class="col-sm-9"></dd>
  <dt class="col-sm-3"></dt>
  <dd class="col-sm-9"></dd>
  <dd class="col-sm-9 offset-sm-3"></dd>
  <dt class="col-sm-3 text-truncate"></dt>
  <dd class="col-sm-9"></dd>
  <dt class="col-sm-3"></dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested title</dt>
      <dd class="col-sm-8">Nested definition</dd>
    </dl>
  </dd>
</dl>                  type="checkbox"
                  id="smsNotification"
                  name="smsNotification"
                  checked={settings.smsNotification === 1 ? true : false}
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
