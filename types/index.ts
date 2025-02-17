export type AuthFormValues = {
  email: string;
  password: string;
  name?: string;
};

export interface ResetPasswordResult {
  success: boolean;
  error?: string;
}

export interface UpdatePasswordResult {
  success: boolean;
  error?: string;
}
