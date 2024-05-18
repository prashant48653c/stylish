import { View, Text, ScrollView, Touchable, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Nav from '../../components/Nav'
import Poster from '../../components/Poster'
import ProductContainer from '../../components/ProductContainer';
import Arrival from '../../components/Arrival';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Banner from '../../components/Banner';




export default function Detail() {
const navigation=useNavigation()
    const handleAddToCartPress = () => {
        // Logic for adding item to cart

        console.log('Item added to cart');
      };
    
      const handleBuyNowPress = () => {
        // Logic for buying item now
        navigation.navigate('check')
        console.log('Buying item now');
      };


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16,backgroundColor:'#F9F9F9',height:'100%'}}>
 <Nav/>
 
  
 <Poster/>
 <View>
    <Text style={{fontSize:18,marginBottom:10,fontWeight:600}} >Size:7 UK</Text>
    <View style={styles.btnGroup} >

        <Button title='7 UK' color={'#CD1818'}  style={{borderWidth:2,borderColor:'white'}} />
        <Button title='6 UK' color={'#F83758'}  style={{borderColor:'pink'}} /> 
        <Button title='8 UK' color={'#F83758'} style={{borderColor:'pink'}} /> 

        

    </View>

    <Text style={{fontSize:23,fontFamily:'mon',fontWeight:800}}>Nike Sneakers</Text>
    <Text style={{fontSize:16,fontWeight:500}} >Vision Alta Men’s Shoes Size (All Colours)</Text>
    <Text style={styles.price} >$1000</Text>
    <Text style={{fontSize:16,fontWeight:500}} >Product Detail</Text>
    <Text style={{fontWeight:400,marginTop:5,fontSize:12,textAlign:'left'}} >Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. </Text>


    <View style={styles.btnGroup} >
<TouchableOpacity style={styles.button} onPress={handleAddToCartPress}>
 <Icon name="shoppingcart" size={20} color="#fff" />

        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBuyNowPress}>
 <Icon name="select1" size={20} color="#fff" />

        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
 
 
</View>
<Banner mainText={'4 Days for delivery'} lowText={'22h 55m 20s remaining'} btn={'Order Now'} bgCol={'#4392F9'} />
 
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
        backgroundColor: '#F83758',
        padding: 10,
        marginTop:10,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:4
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      price:{
        fontSize:19,
        fontWeight:"700",
        fontFamily:'monbold',
        paddingVertical:3,
        color:'red'

    }
})