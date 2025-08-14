import {USER} from '@/mocks/userData';

export const getFavoriteBrand = (): string => {
  const shelf = USER.shelf;
  const brandCount: Record<string, number> = {};
  shelf.forEach(item => {
    if (item.Brand) {
      brandCount[item.Brand] = (brandCount[item.Brand] || 0) + 1;
    }
  });
  const favoriteBrand = Object.keys(brandCount).reduce((a, b) =>
    brandCount[a] > brandCount[b] ? a : b,
  );
  return favoriteBrand;
};
