import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import {RoutineScreen} from './screens/RoutineScreen';
import {SearchScreen} from './screens/SearchScreen';
import {ShelfScreen} from './screens/ShelfScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Routine" component={RoutineScreen} />
        <Tab.Screen name="Shelf" component={ShelfScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
