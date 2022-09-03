export interface ProtoUser {
  userName: string;
  password: string;
}

export interface RegisteredUser {
  id: string;
  userName: string;
  token: string;
}

export interface UserToken {
  token: string;
}
