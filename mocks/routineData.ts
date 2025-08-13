import {Cosmetic} from '@/types/Cosmetic';
import databaseRaw from '../data/database.json';

const database: Cosmetic[] = databaseRaw as Cosmetic[];

export const Routine: Cosmetic[] = [
  database[0],
  database[1267],
  database[2345],
  database[3456],
  database[4567],
  database[5678],
  database[6789],
  database[7890],
];
