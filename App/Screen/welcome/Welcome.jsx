import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
 

const image = require('../../../assets/welcome/wel.png');


const Welcome = () => {
  
  const navigator=useNavigation()
  return(
 
  
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

  
    <View style={{display:'flex',alignItems:'center',width:315,justifyContent:'flex-end',height:"100%"}} >
<Text style={{ color: '#FFF',
    textAlign: 'center',
    fontFamily: 'monbold',
    fontSize: 34,
  
   
    letterSpacing: 0.34,}}>You want Authentic, here you go!</Text>
    <Text style={{color:'#F2F2F2',paddingTop:14}} >Find it here, buy it now!</Text>
    <Pressable onPress={()=>navigator.navigate('login')} style={{ display: 'flex',
    width: 279,
    height: 55,
    borderRadius: 4,
    backgroundColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    gap: 10,
    flexShrink: 0,
    marginTop:44,
    marginBottom:34
    
    }} >
<Text style={{ color: '#FFF',
    fontFamily: 'mon',
    fontSize: 23,
   }} >Get Started</Text>
    </Pressable>
</View>
   



  
    </ImageBackground>


  </View>
  
);
}
export default Welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems:"center"
    },
    text: {
      color: 'white',
      fontSize: 34,
     
  
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    backgroundGradient: {
        flex: 1,
        // Add other styles as needed
      },
  });