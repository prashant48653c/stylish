import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home1 from './App/Screen/Home1';
import Home2 from './App/Screen/Home2';
import { useFonts } from 'expo-font';
import Login from './App/Screen/auth/Login';
import Create from './App/Screen/auth/Create';


export default function App() {
  const [fontsLoaded] = useFonts({
    'mon': require('./App/font/Montserrat-Regular.ttf'),
    'monbold': require('./App/font/Montserrat-Bold.ttf'),

   

    

  });

  return (
    <View style={styles.container}>
     {/* <Home1/> */}
     {/* <Home2/> */}
     {/* <Login/> */}
     <Create/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:"100%",
    width:"100%",
    paddingTop:30,
    paddingHorizontal:17
  },
});
