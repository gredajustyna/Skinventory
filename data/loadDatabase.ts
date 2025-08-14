import {Cosmetic} from '@/types/Cosmetic';
import databaseRaw from '../data/database.json';

export const loadDatabase = (): Cosmetic[] => {
  return databaseRaw as Cosmetic[];
};
