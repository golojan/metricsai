export interface UserInfo {
  _id?: number;
  accountType?: string;
  picture?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  gender?: string;
  mobile?: string;
  birthday?: string;
  smsNotification?: boolean;
  emailNotification?: boolean;
}

export interface AuthUserInfo {
  _id?: number;
  accountType?: string;
  picture?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  gender?: string;
  mobile?: string;
  birthday?: string;
  smsNotification?: boolean;
  emailNotification?: boolean;
  schoolCode?: string;
}

export interface ResponseFunctions {
  GET?: Function;
  POST?: Function;
}
