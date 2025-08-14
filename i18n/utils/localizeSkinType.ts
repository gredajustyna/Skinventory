import {SkinType} from '@/types/Cosmetic';
import {useTranslation} from 'react-i18next';

export const localizeSkinType = (skinType: SkinType) => {
  const {t} = useTranslation();
  return t(`skinTypes.${skinType.toLowerCase()}`);
};
