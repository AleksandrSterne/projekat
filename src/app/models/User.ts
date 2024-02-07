export interface LoginCredentials {
  username: string,
  password: string,
}

export interface User extends LoginCredentials {
  id: number,
}
