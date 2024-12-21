import { View, Text, Image,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
 
import Nav from '../../components/Nav'
import { StyleSheet } from 'react-native'

export default function Account() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16,backgroundColor:'#F9F9F9',height:'100%'}}>
        <Nav/>
        <Text style={{textAlign:'center',fontSize:18,fontWeight:600, }} >Your Account</Text>
        <View style={{alignItems:'center',gap:5,marginVertical:15}} >
            <Image source={require('../../../assets/feed/fashion.png')} />
            <Text style={{fontSize:19,fontWeight:700}} >Prashant Acharya</Text>
        </View>
      <View style={styles.box} >
        <Text  style={styles.boxtext}>Dark Mode</Text>
      </View >

      <View style={styles.box}>
        <Text style={styles.boxtext}>Your Cart</Text>
      </View>

      <View style={styles.box}>
        <Text  style={styles.boxtext}>History</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.boxtext}>Log Out</Text>
      </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    box:{
        padding:12,
        
         
        borderWidth:2,
        borderColor:'red',
        borderRadius:10,
        marginVertical:10,
        backgroundColor:'white'
    },
    boxtext:{
        
        fontSize:16,
        fontWeight:'600'
    }
})