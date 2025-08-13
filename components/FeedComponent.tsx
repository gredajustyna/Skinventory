import {Colors} from '@/constants/Colors';
import {Cosmetic} from '@/types/Cosmetic';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export interface FeedComponentProps {
  cosmetic: Cosmetic;
}

export const FeedComponent = (props: FeedComponentProps) => {
  return (
    <TouchableOpacity style={styles.shadow}>
      <View style={styles.container}>
        {/* TODO: Add image */}
        <View style={styles.placeholder} />
        <View style={{paddingHorizontal: 10}}>
          <Text numberOfLines={1}>{props.cosmetic.Product_Name}</Text>
          <Text numberOfLines={1}>{props.cosmetic.Brand}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  placeholder: {
    width: 112,
    height: 100,
    backgroundColor: Colors.textGray,
    borderRadius: 15,
    marginBottom: 10,
  },
  container: {
    flexDirection: 'column',
    height: 180,
    width: 130,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.textGray,
    backgroundColor: Colors.background,
    alignItems: 'center',
    paddingTop: 10,
  },
});
