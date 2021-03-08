export interface User {
  id: string;
  image: string;
  nickname: string;
  email: string;
  profession: string;
  bio: string;
  gender: number;
  birthday: string | number;
  country: string | number;
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}
