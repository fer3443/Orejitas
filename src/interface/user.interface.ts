export interface User {
  id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: "ADMIN" | "USER";
  createAt: Date;
  updateAt: Date;
}