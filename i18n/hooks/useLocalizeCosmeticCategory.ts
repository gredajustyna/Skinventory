import {CosmeticCategory} from '@/types/Cosmetic';
import {useTranslation} from 'react-i18next';

export const useLocalizeCosmeticCategory = (category: CosmeticCategory) => {
  const {t} = useTranslation();
  return t(`cosmeticCategories.${category.replace(' ', '').toLowerCase()}`);
};
