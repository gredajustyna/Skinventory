import {SkinType} from '@/types/Cosmetic';
import {useTranslation} from 'react-i18next';

export const useLocalizeSkinType = (skinType: SkinType) => {
  const {t} = useTranslation();
  return t(`skinTypes.${skinType.toLowerCase()}`);
};
