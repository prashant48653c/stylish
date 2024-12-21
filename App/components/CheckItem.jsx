import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function CheckItem({item}) {
 const[img,setImg]=useState('')
 const[num,setNum]=useState('')
useEffect(()=>{
    setImg(item.img)
    setNum(item.count)
},[])
const addOrder=()=>{
    setNum(num + 1)
}
const minusOrder=()=>{
    if(num>0){
        setNum(num - 1)
    }
}
  return (
    <View style={{ marginVertical:10}} >
    <View style={styles.container} >
        <Image style={styles.img} source={require('../../assets/feed/image 18(1).png')}  />
        <View   >
        <Text style={{fontSize:16}} >{item.title}</Text>
         
        <Text style={styles.price} >${item.price }</Text>

      
 <View style={{flexDirection:'row',gap:10,alignItems:'center'}} >
    <TouchableOpacity onPress={addOrder} >

  <Icon name="pluscircleo" size={25} color="#000" />
    </TouchableOpacity>


 
<Text style={{fontSize:18}} >{num}</Text>
<TouchableOpacity onPress={minusOrder}  >
<Icon name="minuscircleo" size={25} color="#000" />

</TouchableOpacity>

 </View>


        </View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >
        <Text style={{fontWeight:700,fontSize:17}} >Total Orders: {num}</Text>
        <Text style={{fontWeight:700,fontSize:17}} >{`$ ${item.price * num}`}</Text>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
      justifyContent:'flex-start',
        marginVertical:5,
        gap:30
        
    },
    price:{
 fontSize:17,
 borderWidth:1,
 padding:3,
 borderRadius:3,
minWidth:'50%',
maxWidth:'60%',
 textAlign:'center',
 marginVertical:10
 
 

},
    btn:{

    },
    img:{
borderRadius:8
    }

})