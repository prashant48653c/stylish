import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Success() {
  const navigation = useNavigation();
  return (
    <View style={{width:'100%',height:"100%",flexDirection:'row',justifyContent:"center",alignItems:'center'}} >  
    <View style={{width:"90%",height:400,backgroundColor:"grey",borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center'}} >
      <Text style={{fontSize:20,marginBottom:20}} >Payment done successfully</Text>
      <Button title="Back to feed" onPress={()=>navigation.navigate('feed')} />
    </View>
    </View>  
  )
}