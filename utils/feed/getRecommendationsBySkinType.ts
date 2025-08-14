import {loadDatabase} from '@/data/loadDatabase';
import {getRandomNumber} from '../getRandomNumber';
import {Cosmetic} from '@/types/Cosmetic';

export const getRecommendationsBySkinType = (skinType: string) => {
  const database = loadDatabase();
  const allCosmetics = database.filter(
    cosmetic => cosmetic.Skin_Type === skinType,
  );
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
