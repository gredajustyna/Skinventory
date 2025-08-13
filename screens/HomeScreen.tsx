import {Routine} from '@/mocks/routineData';
import React from 'react';
import {View, Text} from 'react-native';

export const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      {Routine.map((routine, index) => (
        <View key={index}>
          <Text>{routine.Product_Name}</Text>
        </View>
      ))}
    </View>
  );
};
