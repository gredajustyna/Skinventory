import {loadDatabase} from '@/data/loadDatabase';
import {Cosmetic, SkinType} from '@/types/Cosmetic';

const database = loadDatabase();

export const getCosmeticById = (id: number): Cosmetic | undefined => {
  return database.find(cosmetic => cosmetic.id === id);
};

export const getAllCosmetics = (): Cosmetic[] => {
  return database;
};

export const getCosmeticByName = (name: string): Cosmetic | undefined => {
  return database.find(
    cosmetic => cosmetic.Product_Name.toLowerCase() === name.toLowerCase(),
  );
};

export const getCosmeticsByBrand = (brand: string): Cosmetic[] => {
  return database.filter(
    cosmetic => cosmetic.Brand.toLowerCase() === brand.toLowerCase(),
  );
};

export const getCosmeticBySkinType = (skinType: SkinType): Cosmetic[] => {
  return database.filter(cosmetic => cosmetic.Skin_Type === skinType);
};

export const getCosmeticsByCountry = (country: string): Cosmetic[] => {
  return database.filter(
    cosmetic =>
      cosmetic.Country_of_Origin.toLowerCase() === country.toLowerCase(),
  );
};

export const getCrueltyFreeCosmetics = (): Cosmetic[] => {
  return database.filter(cosmetic => cosmetic.Cruelty_Free);
};
