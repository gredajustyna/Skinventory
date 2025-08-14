import {getCosmeticById} from '@/api/api';
import {RootStackParamList} from '@/App';
import {IconName, StyledIcon} from '@/components/CustomIcon';
import {Colors} from '@/constants/Colors';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {loremIpsum} from 'react-lorem-ipsum';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'ProductScreen'>;

export const ProductScreen = ({route}: {route: ProductScreenRouteProp}) => {
  const id = route.params?.id;
  const cosmetic = getCosmeticById(id);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  if (!cosmetic) {
    return (
      <View>
        <Text>Cosmetic not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <StyledIcon
            name={IconName.Back}
            color={Colors.background}
            width={40}
            height={40}
          />
        </TouchableOpacity>
        <View style={styles.placeholder} />
        <View>
          <Text style={styles.nameText}>{cosmetic.Product_Name}</Text>
          <Text style={styles.brandText}>{cosmetic.Brand}</Text>
          <Text>{loremIpsum({p: 2})}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').width - 32,
    backgroundColor: Colors.textGray,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.accent,
  },
  brandText: {
    fontSize: 20,
    color: Colors.textGray,
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: Colors.accent,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
