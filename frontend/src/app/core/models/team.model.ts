import { Member } from './member.model';
export interface Team {
  id: string;
  name: string;
  image: string;
  language: string;
  members:Member[];
}
