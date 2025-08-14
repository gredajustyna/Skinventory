import {StyledIcon, IconName} from '@/components/CustomIcon';
import {Colors} from '@/constants/Colors';
import {HomeScreen} from '@/screens/HomeScreen';
import {ProfileScreen} from '@/screens/ProfileScreen';
import {RoutineScreen} from '@/screens/RoutineScreen';
import {SearchScreen} from '@/screens/SearchScreen';
import {ShelfScreen} from '@/screens/ShelfScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

const Tab = createBottomTabNavigator();

interface RoutineButtonProps {
  children: React.ReactNode;
  onPress?: TouchableOpacityProps['onPress'];
}

const RoutineButton: React.FC<RoutineButtonProps> = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: Colors.accent,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.background,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          height: 70,
          marginRight: 20,
          marginLeft: 20,
          paddingTop: 15,
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
            <StyledIcon
              name={IconName.Home}
              color={color}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <StyledIcon
              name={IconName.Search}
              color={color}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Routine"
        component={RoutineScreen}
        options={{
          tabBarIcon: ({color}) => (
            <StyledIcon
              name={IconName.Routine}
              color={color}
              width={30}
              height={30}
            />
          ),
          tabBarButton: props => <RoutineButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Shelf"
        component={ShelfScreen}
        options={{
          tabBarIcon: ({color}) => (
            <StyledIcon
              name={IconName.Shelf}
              color={color}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <StyledIcon
              name={IconName.Profile}
              color={color}
              width={30}
              height={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
