export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthUser extends UserProfile {
  username: string;
  roles: string[];
  token?: string;
}


