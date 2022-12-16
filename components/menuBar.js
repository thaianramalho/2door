import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons';
// import Home from './home';
import Menu from './menu';
import Loading from './loading';
import { Ionicons } from '@expo/vector-icons';
import BoxJogos from './boxJogos';

const Tab = createBottomTabNavigator();

const Person = ()=> (
  <View>
    <Text>Oi</Text>
  </View>
);

const Home = ()=> (
  <View>
    <FontAwesomeIcon icon={faHouse} size={40}/>
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
        <Tab.Screen name="Notifications" component={BoxJogos} />
        <Tab.Screen name="User" component={Person} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}