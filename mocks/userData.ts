import {User} from '@/types/User';
import {ROUTINE, SHELF} from './routineData';

export const USER: User = {
  id: '1',
  name: 'Riley',
  email: 'riley@example.com',
  profilePicture: '../assets/images/profile-picture.png',
  routine: ROUTINE,
  skinType: 'Combination',
  crueltyFreeBadge: true,
  shelf: SHELF,
};
