export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}