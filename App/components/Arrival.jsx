import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const Arrival = () => {
  return (
    <View style={styles.container} >
        <Image style={styles.img} source={require('../../assets/feed/hot.png')} />
      <Text style={{  color: '#000', // Default color is #000
    textAlign: 'left',
    fontFamily: 'mon',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    marginTop:10,
    paddingLeft:5}}>New Arrivals</Text>

      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5 }}>
      <Text style={{color: '#000', // Default color is #000
    textAlign: 'center',
    fontFamily: 'mon',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,}} >Summer’ 25 Collections</Text>

<Pressable style={styles.btn}><Text style={styles.btnText}>Shop Now</Text>
    <Image source={require('../../assets/feed/arrow.png')} />
    </Pressable>
      </View>
    </View>
  )
}

export default Arrival

const styles=StyleSheet.create({
    container:{
        width: 343,
height: 270,
borderRadius:8,
backgroundColor:'white',
marginBottom:24
 

 
    },
    img:{
        width: 325,
height: 204,
borderRadius:8
 
    },
    btnText:{
        color: '#FFF', // Default color is #FFF
        textAlign: 'center',
        fontFamily: 'mon',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
      },btn:{
        paddingVertical:6,
       backgroundColor:'#F83758',
        borderRadius:4,
        display:'flex',
        flexDirection:'row',
        gap:4,
        borderWidth:1,
      
      borderColor:'#F83758',
      paddingHorizontal:10,
      marginRight:20
      
      
        
      },
})