export interface ProtoUser {
  userName: string;
  password: string;
}

export interface RegisteredUse {
  id: string;
  userName: string;
  token: string;
}

export interface UserToken {
  user: {
    token: string;
  };
}
