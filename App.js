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




export default function App() {
  const [fontsLoaded] = useFonts({
    'mon': require('./App/font/Montserrat-Regular.ttf'),
    'monbold': require('./App/font/Montserrat-Bold.ttf'),
 
  });
  
  const [ splash,setSplash]=useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setSplash(false);
    }, 3000); // 3 seconds
    return ()=> clearTimeout(timer)
  },[])

  if(splash){
    return <Home1/>
  }
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      
    <NavigationContainer>
       <Stack.Navigator   screenOptions={{headerShown: false}} >

       
       
  
        
        
        <Stack.Screen name="Home2" component={Home2} />
  <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="create" component={Create} />
        <Stack.Screen name="forget" component={Forget} />
        <Stack.Screen name="success" component={Success} />

 
 
       
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="feed" component={Feed} />
        <Stack.Screen name="wish" component={Wish} />
        <Stack.Screen name="check" component={Checkout} />
        <Stack.Screen name="detail" component={Detail} />



      </Stack.Navigator>
    <SafeAreaView>

    {/* Authentication  */}
      

      {/* Welcome Section */}
      {/* <View style={styles.welcome} >
        <Welcome />
        <StatusBar style="light" />
      </View>  

      {/* Feed section */}
      
      <View >
        {/* <Feed /> */}
        {/* <Wish /> */}
        {/* <Checkout/> */}
        {/* <Success/> */}
        {/* <Detail/> */}
      </View>

 
      <StatusBar  backgroundColor='white' style='dark' />
     
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