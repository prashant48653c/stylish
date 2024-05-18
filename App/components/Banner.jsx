import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const Banner = ({mainText,lowText,bgCol,btn}) => {
  const navigation=useNavigation()
  return (
    <View style={[styles.container,{backgroundColor:`${bgCol}`}]}>
                <View  >
                    <Text style={[styles.text,{fontWeight:'700'}]} >{mainText}</Text>
                    <Text style={styles.text} >{lowText} </Text>

                </View>
                <Pressable onPress={()=>navigation.navigate('wish')} style={styles.btn}><Text style={styles.btnText}>{btn || "Shop Now" }</Text>
    <Image source={require('../../assets/feed/arrow.png')} />
    </Pressable>
    </View>
  )
}

export default Banner


const styles=StyleSheet.create({
  
   
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
    
      
    },
    container:{
        width:'100%',
         
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12,
        alignItems:'center',
        marginVertical:8,
        marginBottom:28
    },
    text:{
   
        color: '#FFF', // Default color is #FFF
        fontFamily: 'mon',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
    }
   
  
  })