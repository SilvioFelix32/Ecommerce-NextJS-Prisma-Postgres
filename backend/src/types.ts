export type CreateSessionDTO = {
  name: string;
  email: string;
  password: string;
}

type UserData = {
  name: string;
  password: string;
  roles: string[];
}

export type UsersStore = Map<string, UserData>

export type RefreshTokensStore = Map<string, string[]>

export type DecodedToken = {
  sub: string;
}