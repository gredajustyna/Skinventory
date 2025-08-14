import {getCosmeticById} from '@/api/api';
import {RootStackParamList} from '@/App';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'ProductScreen'>;

export const ProductScreen = ({route}: {route: ProductScreenRouteProp}) => {
  const id = route.params?.id;
  const cosmetic = getCosmeticById(id);
  if (!cosmetic) {
    return (
      <View>
        <Text>Cosmetic not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{cosmetic.Product_Name}</Text>
    </View>
  );
};
