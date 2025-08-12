import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import {RoutineScreen} from './screens/RoutineScreen';
import {SearchScreen} from './screens/SearchScreen';
import {ShelfScreen} from './screens/ShelfScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './constants/Colors';
import {StyleSheet} from 'react-native';
import {IconName, StyledIcon} from './components/CustomIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 70,
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: Colors.primary,
            borderRadius: 15,
            ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <StyledIcon name={IconName.Home} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Routine" component={RoutineScreen} />
        <Tab.Screen name="Shelf" component={ShelfScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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
