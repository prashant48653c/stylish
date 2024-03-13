import { View, Text, ImageBackground, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

export default function Poster() {
  return (
    <ImageBackground resizeMode="cover" imageStyle={{borderRadius:12}} style={{height:189,marginBottom:30}}  source={require('../../assets/feed/bg.png')} >
<View style={styles.container}>
<Text style={styles.commonText} >50-40% OFF</Text>
    <Text style={styles.text}  >Now in (product)</Text>
    <Text style={styles.text} >All colours</Text>
    <Pressable style={styles.btn}><Text style={styles.btnText}>Shop Now</Text>
    <Image source={require('../../assets/feed/arrow.png')} />
    </Pressable>
</View>
 

    </ImageBackground>
  )
}


const styles=StyleSheet.create({
  commonText:{
  
   color:'white',
    fontFamily: 'mon',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom:8
  },
  text:{
  
    color: '#FFF',
    fontFamily: 'mon',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    marginBottom:4
  }
  ,container:{
    marginTop:40,
    marginLeft:14,
    
  },
  btnText:{
    color: '#FFF', // Default color is #FFF
   
    fontFamily: 'mon',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },btn:{
    padding:8,
    borderColor:'white',
    borderRadius:3,
    display:'flex',
    flexDirection:'row',
    gap:4,
    borderWidth:1,
  width:100,
  marginTop:6
    
  }
 

})