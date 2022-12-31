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
  smsNotification?: number;
  emailNotification?: number;
  schoolCode?: string;
  googleScholarId?: string;
  scopusId?: string;
  orcidId?: string;
}

export interface ResponseFunctions {
  GET?: Function;
  POST?: Function;
}
