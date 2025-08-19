import {Colors} from '@/constants/Colors';
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {IconName, StyledIcon} from './CustomIcon';
import {useTranslation} from 'react-i18next';

export const AddToRoutineButton = ({inShelf}: {inShelf?: boolean}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity>
      <View
        style={[styles.button, inShelf && {backgroundColor: Colors.textGray}]}>
        <StyledIcon
          name={IconName.Routine}
          color={Colors.background}
          width={40}
          height={40}
        />
        <Text style={styles.text}>{t('productScreen.addToRoutine')}</Text>
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
