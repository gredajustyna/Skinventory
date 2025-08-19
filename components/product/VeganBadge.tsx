import {Colors} from '@/constants/Colors';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconName, StyledIcon} from '../CustomIcon';
import {useTranslation} from 'react-i18next';

export const VeganBadge = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <StyledIcon name={IconName.Animals} color={Colors.secondary} />
      <Text style={styles.text}>{t('productScreen.vegan')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: Colors.secondary,
    width: '50%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
});
