import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home1 from './App/Screen/Home1';
import Home2 from './App/Screen/Home2';
import { useFonts } from 'expo-font';
import Login from './App/Screen/auth/Login';
import Create from './App/Screen/auth/Create';
import Forget from './App/Screen/auth/Forget';
import Welcome from './App/Screen/welcome/Welcome';
import Feed from './App/Screen/feeds/Feed';


export default function App() {
  const [fontsLoaded] = useFonts({
    'mon': require('./App/font/Montserrat-Regular.ttf'),
    'monbold': require('./App/font/Montserrat-Bold.ttf'),





  });

  return (
    <>

    {/* Authentication  */}
      {/* <View style={styles.container}> */}
        
        {/* <Home1/> */}
        {/* <Home2/> */}
        {/* <Login/> */}
        {/* <Create/> */}
        {/* <Forget/> */}



      
      {/* </View > */}

      {/* Welcome Section */}
      {/* <View style={styles.welcome} >
        <Welcome />
        <StatusBar style="light" />
      </View> */}

      {/* Feed section */}
      <View >
        <Feed />
        <StatusBar style="dark" />


      </View>



     
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%",
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 17
  },
  welcome: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%",
    width: "100%",

  },
 
});
