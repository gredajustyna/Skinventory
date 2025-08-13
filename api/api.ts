import {Cosmetic, SkinType} from '@/types/Cosmetic';
import databaseRaw from '../data/database.json';

const database: Cosmetic[] = databaseRaw as Cosmetic[];

export const getCosmeticById = (id: number): Cosmetic | undefined => {
  const cosmetics = database;
  return cosmetics.find(cosmetic => cosmetic.id === id);
};

export const getAllCosmetics = (): Cosmetic[] => {
  return database;
};

export const getCosmeticByName = (name: string): Cosmetic | undefined => {
  const cosmetics = database;
  return cosmetics.find(
    cosmetic => cosmetic.Product_Name.toLowerCase() === name.toLowerCase(),
  );
};

export const getCosmeticsByBrand = (brand: string): Cosmetic[] => {
  const cosmetics = database;
  return cosmetics.filter(
    cosmetic => cosmetic.Brand.toLowerCase() === brand.toLowerCase(),
  );
};

export const getCosmeticBySkinType = (skinType: SkinType): Cosmetic[] => {
  const cosmetics = database;
  return cosmetics.filter(cosmetic => cosmetic.Skin_Type === skinType);
};

export const getCosmeticByCountry = (country: string): Cosmetic[] => {
  const cosmetics = database;
  return cosmetics.filter(
    cosmetic =>
      cosmetic.Country_of_Origin.toLowerCase() === country.toLowerCase(),
  );
};

export const getCrueltyFreeCosmetics = (): Cosmetic[] => {
  const cosmetics = database;
  return cosmetics.filter(cosmetic => cosmetic.Cruelty_Free);
};
