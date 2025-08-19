import {Cosmetic} from '@/types/Cosmetic';

export const checkIfCosmeticInRoutine = (
  cosmeticId: number,
  routine: Cosmetic[],
) => {
  return routine.some(item => item.id === cosmeticId);
};
