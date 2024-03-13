import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Nav = () => {
  return (
    <View style={styles.nav} >
<View style={styles.menu}>
    <Image  source={require('../../assets/feed/menu.png')} />
</View>

<View style={styles.icons} >
<Image   source={require('../../assets/feed/logo.png')} />
 

</View>

<View>
<Image  source={require('../../assets/feed/pp.png')} />

</View>
    </View>
  )
}

export default Nav


const styles = StyleSheet.create({
    nav: {
     width:'100%',
      flexDirection:'row',
      display:'flex',
      justifyContent:'space-between',
    height:56,
    alignItems:'center',
    marginTop:44,
    marginBottom:14
    },
    menu:{
        width:32,
        height:32,
        padding:4,
        borderRadius:33,
        backgroundColor:'#F2F2F2'
    },icons:{
        display:'flex',
      
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    }
 
   
   
  });