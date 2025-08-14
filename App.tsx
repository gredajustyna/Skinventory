import {NavigationContainer} from '@react-navigation/native';
import '@/i18n';
import {createStackNavigator} from '@react-navigation/stack';

import {Tabs} from './navigation/Tabs';
import {ProductScreen} from './screens/ProductScreen';

export type RootStackParamList = {
  TabNavigator: undefined;
  ProductScreen: {
    id: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNavigator" component={Tabs} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
