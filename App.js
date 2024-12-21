import { StatusBar } from 'expo-status-bar';
import { AppRegistry, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home1 from './App/Screen/Home1';
import Home2 from './App/Screen/Home2';
import { useFonts } from 'expo-font';
import Login from './App/Screen/auth/Login';
import Create from './App/Screen/auth/Create';
import Forget from './App/Screen/auth/Forget';
import Welcome from './App/Screen/welcome/Welcome';
import Feed from './App/Screen/feeds/Feed';
import Wish from './App/Screen/wishlist/Wish';
import Detail from './App/Screen/Detail/Detail';
import Checkout from './App/Screen/checkout/Checkout';
import Success from './App/components/Success';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { useEffect, useState } from 'react';
import {Map} from './App/components/map';
import { BottomTab } from './App/components/BottomTab';







export default function App() {
  const [fontsLoaded] = useFonts({
    'mon': require('./App/font/Montserrat-Regular.ttf'),
    'monbold': require('./App/font/Montserrat-Bold.ttf'),
  });

 
const Stack = createNativeStackNavigator();
  const [splash, setSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 1000);  
    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  if (splash) {
    return <Home1 />;
  }


  const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forget" component={Forget} />

      <Stack.Screen name="create" component={Create} />
       

    </Stack.Navigator>
  );
  
  const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );

  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor="white" style="dark" />
          {isLoggedIn ? <MainStack /> : <AuthStack />}
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

  welcome: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%",
    width: "100%",

  },
 
});

AppRegistry.registerComponent(appName, () => Main);