import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './constants/Colors';
import {StyleSheet} from 'react-native';
import '@/i18n';
import {createStackNavigator} from '@react-navigation/stack';

import {Tabs} from './navigation/Tabs';
import {ProductScreen} from './screens/ProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNavigator" component={Tabs} />
        <Stack.Screen
          name="ProductPage"
          component={ProductScreen}
          options={{
            headerShown: true,
            headerTitle: 'Product Details',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
