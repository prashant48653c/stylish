import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const ProductCard = ({item}) => {
  
  return (
    <View style={styles.container} >
 <Image style={{ borderRadius: 7,  }} source={require('../../assets/feed/shoe.png')} />


       <View>
        <Text style={styles.productName} >{item.pName}</Text>
        <Text style={styles.desc} >{item.pDesc}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={{flexDirection:'row',alignItems:'flex-end',gap:3}} >
        <Text style={{   textDecorationLine: 'line-through',fontSize:14,color:'grey',fontFamily:'mon'}} >{item.former} </Text>
        <Text style={{   textDecorationLine: 'none',fontSize:14,color:'red',fontFamily:'mon'}}>{item.dis}</Text>
        </View>
       
       </View>
    </View>
  )
}

export default ProductCard

const styles=StyleSheet.create({
    container:{
        width: 170,
        height: 241,
        backgroundColor:'white',
        borderRadius:5,
        display:'flex',
        gap:8,
        borderRadius:7,
        marginRight:12,
        marginBottom:16
    },
    productName:{
        fontSize:15,
        fontFamily:'mon',
        paddingBottom:4
    },
    desc:{
        color:'grey',
        fontSize:12,
        fontFamily:'mon'

    },
    price:{
        fontSize:15,
        fontWeight:"600",
        fontFamily:'mon',
        paddingVertical:3

    }
})