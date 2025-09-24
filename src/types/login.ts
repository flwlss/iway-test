export type LoginRequest = {
  login: string;
  password: string;
};

export type LoginResponse = {
  error: LoginError | null;
  result: {
    token: string;
  };
  uuid: string;
};

type LoginError = {
  name: string;
  message: string;
  code: number;
  status: number;
};
