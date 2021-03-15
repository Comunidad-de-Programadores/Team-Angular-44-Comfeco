import { Member } from './member';
export interface Team {
  id: string;
  name: string;
  image: string;
  language: string;
  members:Member[];
}
