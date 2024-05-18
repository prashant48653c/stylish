import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function CheckItem({item}) {
  return (
    <View style={{ marginVertical:10}} >
    <View style={styles.container} >
        <Image style={styles.img} source={require('../../assets/feed/image 18(1).png')}  />
        <View   >
        <Text style={{fontSize:16}} >Addidas Sports Sneakers</Text>
         
        <Text style={styles.price} >$ 30.00</Text>

      
 <View style={{flexDirection:'row',gap:10,alignItems:'center'}} >
  <Icon name="pluscircleo" size={25} color="#000" />


 
<Text style={{fontSize:18}} >1</Text>
<Icon name="minuscircleo" size={25} color="#000" />

 </View>


        </View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >
        <Text style={{fontWeight:700,fontSize:17}} >Total Orders: 1</Text>
        <Text style={{fontWeight:700,fontSize:17}} >$ 34.00</Text>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
        
    },
    price:{
 fontSize:17,
 borderWidth:1,
 padding:3,
 borderRadius:3,
 width:'50%',
 textAlign:'center',
 marginVertical:10
 
 

},
    btn:{

    },
    img:{
borderRadius:8
    }

})