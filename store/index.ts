import { atom } from "jotai";
import { AuthUserInfo } from "../interfaces";
const cookie = require("js-cookie");

export const tokenAtom = atom(cookie.get("token") || "");
export const profileAtom = atom<AuthUserInfo>({});
