export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  verifyCode?: string;
  username?: string;
  gender?: string;
  countryId?: number;
};
