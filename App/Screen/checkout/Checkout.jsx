import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductContainer from '../../components/ProductContainer'
import Nav from '../../components/Nav'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import CheckItem from '../../components/CheckItem'

export default function Checkout() {
  const navigation=useNavigation()
  const navMap=()=>{
    console.log("Navigating to map")
    navigation.navigate('map')
  }
  let DATA=[
    {
      img:'',
      title:"Women's dress",

      price:'122',
      size:'3V',
      count:2
    },
    {
      img:'',
      title:"Women's Pant",

      price:'122',
      size:'3V',
      count:4
    },{
      img:'',
      title:"Shoe dress",
      price:'122',
      size:'3V',
      count:1
    },
  ]









  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16,backgroundColor:'#F9F9F9',height:'100%'}}>
 <Nav/>
      <Text style={{fontSize:20,marginBottom:16}} >Your List</Text>
 
 <View>
 <FlatList keyExtractor={item =>item.title} data={DATA} renderItem={(item)=>{
  return(
    <CheckItem item={item.item} />
  )
 }} />
 </View>

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


paddingHorizontal: 15,
paddingVertical: 15,
position: "relative"


}} >
<Image style={{
width: 16,
height: 20,
marginRight: 11
}} source={require('../../../assets/icons/lock.png')} />


<TextInput onChangeText={(e)=>setPass(e)} style={{
color: '#676767',
flex: 1

}} placeholder={'Delivery address'} />



<TouchableOpacity onPress={navMap} style={{ alignContent: "flex-end" }}>
<Image style={{
width: 20,
height: 20,

}} source={require('../../../assets/icons/eye.png')} />

</TouchableOpacity>

 

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


paddingHorizontal: 15,
paddingVertical: 15,
position: "relative"


}} >
<Image style={{
width: 16,
height: 20,
marginRight: 11
}} source={require('../../../assets/icons/lock.png')} />


<TextInput onChangeText={(e)=>setPass(e)} style={{
color: '#676767',
flex: 1

}} placeholder={'Password'} />



<View style={{ alignContent: "flex-end" }}>
<Image style={{
width: 20,
height: 20,

}} source={require('../../../assets/icons/eye.png')} />

</View>

<View style={{
position: "absolute",
top: 59,
right: 1
}} >
 
</View>

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
 

<TouchableOpacity onPress={()=>navigation.navigate('success')} style={{
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
marginVertical:20
 
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