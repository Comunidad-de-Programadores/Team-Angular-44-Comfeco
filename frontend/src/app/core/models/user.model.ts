import { Badge } from './badge.model';
export class User {
  id: string;
  image: string;
  nickname: string;
  email: string;
  profession: number;
  bio: string;
  gender: number;
  birthday: string | number;
  country: string | number;
  badges: Badge[];
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;

  constructor(
    id: string,
    image: string,
    nickname: string,
    email: string,
    profession: number,
    bio: string,
    gender: number,
    birthday: string | number,
    country: string | number,
    badges: Badge[] = [],
    github?: string,
    linkedin?: string,
    twitter?: string,
    facebook?: string
  ) {
    this.id = id;
    this.image = image;
    this.nickname = nickname;
    this.email = email;
    this.profession = profession;
    this.bio = bio;
    this.gender = gender;
    this.birthday = birthday;
    this.country = country;
    this.badges = badges;
    this.github = github;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.facebook = facebook;
  }
}
