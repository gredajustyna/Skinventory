import {FeedComponent} from '@/components/FeedComponent';
import {Routine} from '@/mocks/routineData';
import React from 'react';
import {View, Text} from 'react-native';

export const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      {Routine.map((routine, index) => (
        <FeedComponent key={index} cosmetic={routine} />
      ))}
    </View>
  );
};
