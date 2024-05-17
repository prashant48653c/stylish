import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductContainer from '../../components/ProductContainer'
import Nav from '../../components/Nav'

export default function Checkout() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16,backgroundColor:'#F9F9F9',height:'100%'}}>
 <Nav/>
      <Text style={{fontSize:20,marginBottom:16}} >Your List</Text>
 <ProductContainer/>
 <Text style={{fontSize:20,marginTop:16}} >Your Total: $3500</Text>



 <Text style={{fontSize:17,marginTop:16}} >Delivery Address:</Text>
 <View style={{
maxWidth: "100%",
height: 55,
flexShrink: 0,
backgroundColor: '#F3F3F3',
borderWidth: 1,
borderColor: '#A8A8A9',
borderRadius: 10,
display: "flex",
flexDirection: "row",
alignItems: "center",

paddingHorizontal: 11,
paddingVertical: 15,


}} >


<Image style={{
width: 24,
height: 24,
marginRight: 3
}} source={require('../../../assets/icons/User.png')} />
<TextInput style={{ color: '#676767', }} placeholder={'Your address'} />

</View>

<Text style={{fontSize:17,marginTop:16}} >Password:</Text>
 <View style={{
maxWidth: "100%",
height: 55,
flexShrink: 0,
backgroundColor: '#F3F3F3',
borderWidth: 1,
borderColor: '#A8A8A9',
borderRadius: 10,
display: "flex",
flexDirection: "row",
alignItems: "center",

paddingHorizontal: 11,
paddingVertical: 15,


}} >


<Image style={{
width: 24,
height: 24,
marginRight: 3
}} source={require('../../../assets/icons/User.png')} />
<TextInput style={{ color: '#676767', }} placeholder={'Password'} />

</View>

<Text style={{fontSize:17,marginTop:16}} >Phone Number:</Text>
 <View style={{
maxWidth: "100%",
height: 55,
flexShrink: 0,
backgroundColor: '#F3F3F3',
borderWidth: 1,
borderColor: '#A8A8A9',
borderRadius: 10,
display: "flex",
flexDirection: "row",
alignItems: "center",

paddingHorizontal: 11,
paddingVertical: 15,


}} >


<Image style={{
width: 24,
height: 24,
marginRight: 3
}} source={require('../../../assets/icons/User.png')} />
<TextInput style={{ color: '#676767', }} placeholder={'Phone Number'} />

</View>
 

<TouchableOpacity style={{
display: 'flex',
maxWidth: "100%",
height: 53,
display: 'flex',

justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',


borderRadius: 4,
backgroundColor: '#F83758',
flexShrink: 0,
marginTop:20
 
}} >
<Text style={{
color: '#FFF',
fontFamily: 'mon',
fontSize: 20,
fontStyle: 'normal',
fontWeight: 600,

}}>Continue</Text>
</TouchableOpacity>
    </ScrollView>
  )
}