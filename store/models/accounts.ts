import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { UserInfo, AuthUserInfo } from "../../interfaces";

export const accounts = createModel<RootModel>()({
  state: {
    token: "",
    email: "",
    hasProfile: false,
    Profile: {} as AuthUserInfo,
    busy: false,
    online: false,
    verified: false,
    idleTime: 0,
    lastSeen: 0,
  },

  reducers: {
    setBusy(state, payload: boolean) {
      return { ...state, busy: payload };
    },
    setEmail(state, payload: string) {
      return { ...state, email: payload };
    },
    setProfile(state, payload: object) {
      return { ...state, Profile: payload };
    },
    setUser(state, payload: UserInfo) {
      return { ...state, user: payload };
    },
    setToken(state, payload: string) {
      return { ...state, token: payload };
    },
    setOnline(state, payload: boolean) {
      return { ...state, page: payload };
    },
    setVerified(state, payload: boolean) {
      return { ...state, isLogged: payload };
    },
    setLastSeen(state, payload: number) {
      return { ...state, lastSeen: payload };
    },
    setIdelTime(state, payload: number) {
      return { ...state, idleTime: payload };
    },
  },
  effects: (dispatch) => ({
    async getUser(_token: string, RootState) {
      const response = await fetch(`/api/accounts/${_token}/info`);
      const userinfo = await response.json();
      this.setUserInfo(userinfo.data);
      return userinfo;
    },
  }),
});
