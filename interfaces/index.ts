import { Schema } from "mongoose";

export interface SchoolInfo {
  _id?: number;
  name?: string;
  domain: string;
  shortname: string;
  state: string;
  location: string;
  ownedBy: string;
  founded: Number;
}



export interface UserSnippet {
  status?: boolean;
  _id?: number;
  error?: string;
}

export interface AuthUserInfo {
  _id?: number;
  departmentId?: string;
  schoolId?: Schema.Types.ObjectId;
  accountType?: string;
  picture?: string;
  firstname?: string;
  lastname?: string;
  aboutMe?: string;
  username?: string;
  email?: string;
  gender?: string;
  mobile?: string;
  birthday?: string;
  smsNotification?: boolean;
  emailNotification?: boolean;
  schoolCode?: string;
  googleScholarId?: string;
  scopusId?: string;
  orcidId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResponseFunctions {
  GET?: Function;
  POST?: Function;
}
