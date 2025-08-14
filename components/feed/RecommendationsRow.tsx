import {SkinType} from '@/types/Cosmetic';
import {getRecommendationsBySkinType} from '@/utils/feed/getRecommendationsBySkinType';
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {FeedComponent} from '../FeedComponent';
import {getVeganRecommendations} from '@/utils/feed/getVeganRecommendations';
import {getFavoriteBrand} from '@/utils/getFavoriteBrand';
import {getRecommendationsByBrand} from '@/utils/feed/getRecommendationsByBrand';
import {useTranslation} from 'react-i18next';
import {useLocalizeSkinType} from '@/i18n/hooks/useLocalizeSkinType';

interface RecommendationsRowProps {
  type: 'Vegan' | 'SkinType' | 'Brand';
  skinType?: SkinType;
}

export const RecommendationsRow = (props: RecommendationsRowProps) => {
  const {t} = useTranslation();
  const skinType = useLocalizeSkinType(props.skinType ?? 'Normal');
  return (
    <>
      {props.type === 'SkinType' && props.skinType && (
        <View>
          <Text style={styles.titleText}>
            {t('feed.skinTypeRecommendation')}
            <Text style={{fontWeight: 'bold'}}>{skinType}</Text>
          </Text>
          <FlatList
            contentContainerStyle={{gap: 15, paddingVertical: 15}}
            data={getRecommendationsBySkinType(props.skinType)}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => <FeedComponent cosmetic={item} />}
          />
        </View>
      )}
      {props.type === 'Vegan' && (
        <View>
          <Text style={styles.titleText}>{t('feed.veganRecommendation')}</Text>
          <FlatList
            contentContainerStyle={{gap: 15, paddingVertical: 15}}
            data={getVeganRecommendations()}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => <FeedComponent cosmetic={item} />}
          />
        </View>
      )}
      {props.type === 'Brand' && (
        <View>
          <Text style={styles.titleText}>
            {t('feed.brandRecommendation')}
            <Text style={{fontWeight: 'bold'}}>{getFavoriteBrand()}</Text>
          </Text>
          <FlatList
            contentContainerStyle={{gap: 15, paddingVertical: 15}}
            data={getRecommendationsByBrand()}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => <FeedComponent cosmetic={item} />}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
  },
});
