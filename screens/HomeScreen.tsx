import {RecommendationsRow} from '@/components/feed/RecommendationsRow';
import {USER} from '@/mocks/userData';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.greetingText}>{t('feed.greeting')}</Text>
          <Text style={styles.userNameText}>
            {USER.name.toLocaleUpperCase()}
          </Text>
          <View style={styles.rows}>
            <Text style={[styles.greetingText, {marginBottom: 20}]}>
              {t('feed.discover')}
            </Text>
            <RecommendationsRow skinType={USER.skinType} type="SkinType" />
            <RecommendationsRow type="Vegan" />
            <RecommendationsRow type="Brand" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 70,
    paddingHorizontal: 16,
    paddingBottom: 70,
  },
  greetingText: {
    fontSize: 30,
  },
  userNameText: {
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 30,
    letterSpacing: 3,
  },
  rows: {
    marginRight: -16,
    marginLeft: -16,
    paddingLeft: 16,
    paddingTop: 10,
  },
});
