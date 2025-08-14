import {useTranslation} from 'react-i18next';

export const useLocalizeUsageFrequency = (frequency: string) => {
  const {t} = useTranslation();
  return t(`usageFrequencies.${frequency.toLowerCase()}`);
};
