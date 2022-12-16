import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Menu from './menu';
import Loading from './loading';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Person = ()=> (
  <View>
    <Text>Oi</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
              ? 'home'
              : 'home-outline';
            } 
            else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu-outline';
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Notifications" component={Loading} />
        <Tab.Screen name="User" component={Person} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}