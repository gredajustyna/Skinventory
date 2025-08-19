import {Cosmetic} from '@/types/Cosmetic';

export const checkIfCosmeticOnShelf = (
  cosmeticId: number,
  shelf: Cosmetic[],
) => {
  return shelf.some(item => item.id === cosmeticId);
};
