import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {StyledIcon, IconName} from './CustomIcon';
import {Colors} from '@/constants/Colors';

export const AddToShelfButton = ({inShelf}: {inShelf?: boolean}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity>
      <View
        style={[styles.button, inShelf && {backgroundColor: Colors.textGray}]}>
        <StyledIcon
          name={IconName.Shelf}
          color={Colors.background}
          width={40}
          height={40}
        />
        <Text style={styles.text}>{t('productScreen.addToShelf')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.background,
  },
});
