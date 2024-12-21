import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Screen/feeds/Feed';
import Wish from '../Screen/wishlist/Wish';
import Checkout from '../Screen/checkout/Checkout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Fire from 'react-native-vector-icons/SimpleLineIcons';


import Detail from '../Screen/Detail/Detail';
import { Map } from './map';
import Success from './Success';
import { useState } from 'react';
import Account from '../Screen/account/Account';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={Feed} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="Cart" component={CartStack} />

    </Stack.Navigator>
  );
}

function PopularStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="wish" component={Wish} />
      <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="check" component={Checkout} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="map" component={Map} />
      <Stack.Screen name="success" component={Success} />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
  );
}
export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor = focused ? 'red' : 'black';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Popular') {
            iconName = 'staro';
          } else if (route.name === 'Cart') {
            iconName = 'shoppingcart';
          } else if (route.name === 'Account') {
            iconName = 'setting';
          }

          return <Icon name={iconName} size={25} color={iconColor} />;
        },
        tabBarShowLabel: false,
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />


      <Tab.Screen name="Popular" component={PopularStack} />


      <Tab.Screen
        name="Cart" component={CartStack} />


      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}