import {loadDatabase} from '@/data/loadDatabase';
import {getRandomNumber} from '../getRandomNumber';
import {Cosmetic} from '@/types/Cosmetic';
import {getFavoriteBrand} from '../getFavoriteBrand';

export const getRecommendationsByBrand = () => {
  const database = loadDatabase();
  const brand = getFavoriteBrand();
  const allCosmetics = database.filter(cosmetic => cosmetic.Brand === brand);
  const recommendations: Cosmetic[] = [];
  for (let i = 0; i < 20; i++) {
    const randomIndex = getRandomNumber(0, allCosmetics.length - 1);
    if (recommendations.includes(allCosmetics[randomIndex])) {
      i--;
      continue;
    }
    recommendations.push(allCosmetics[randomIndex]);
  }
  return recommendations;
};
