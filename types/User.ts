import {Cosmetic, SkinType} from './Cosmetic';

export type User = {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  routine: Cosmetic[];
  skinType: SkinType;
  crueltyFreeBadge: boolean;
  shelf: Cosmetic[];
};
