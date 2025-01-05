export const MOCK_CREDENTIALS = {
  email: 'demo@example.com',
  password: 'demo123'
};

export const validateCredentials = (email: string, password: string): boolean => {
  return email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password;
};