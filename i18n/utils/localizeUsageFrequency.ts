import {useTranslation} from 'react-i18next';

export const localizeUsageFrequency = (frequency: string) => {
  const {t} = useTranslation();
  return t(`usageFrequencies.${frequency.toLowerCase()}`);
};
