import { View, Text, ScrollView, Touchable, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Nav from '../../components/Nav'
import Poster from '../../components/Poster'
import ProductContainer from '../../components/ProductContainer';
import Arrival from '../../components/Arrival';

export default function Detail() {

    const handleAddToCartPress = () => {
        // Logic for adding item to cart
        console.log('Item added to cart');
      };
    
      const handleBuyNowPress = () => {
        // Logic for buying item now
        console.log('Buying item now');
      };


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16,backgroundColor:'#F9F9F9',height:'100%'}}>
 <Nav/>
 
  
 <Poster/>
 <View>
    <Text>Size:7V</Text>
    <View style={styles.btnGroup} >
        <Button title='4V' />
        <Button title='6V' /> 
        <Button title='8V' /> 

        

    </View>

    <Text style={{fontSize:23,fontFamily:'mon'}}>Nike Sneakers</Text>
    <Text style={{fontSize:16}} >Vision Alta Men’s Shoes Size (All Colours)</Text>
    <Text style={styles.price} >$1000</Text>
    <Text style={{fontSize:20}} >Product Detail</Text>
    <Text>Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. </Text>


    <View style={styles.btnGroup} >
<TouchableOpacity style={styles.button} onPress={handleAddToCartPress}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBuyNowPress}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
 
 
</View>
<Arrival/>
<Text style={{fontSize:22,marginVertical:18,fontFamily:'monbold'}} >More Products</Text>
 </View  >


 <ProductContainer/>
 <ProductContainer/>
 <ProductContainer/>

 

    </ScrollView>
  )
}


const styles=StyleSheet.create({
    btnGroup:
    {
        flexDirection:'row',
        gap:4,
        marginBottom:14
    },
    button: {
        backgroundColor: '#3F92FF',
        padding: 10,
        marginTop:10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      price:{
        fontSize:19,
        fontWeight:"600",
        fontFamily:'monbold',
        paddingVertical:3,
        color:'red'

    }
})