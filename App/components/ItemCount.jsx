import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const ItemCount = () => {
  return (
    <View style={styles.container}>
        <View>
        <Text style={{fontSize:18,fontFamily:'mon',fontWeight:'600'}} >All Featured</Text>
        </View>


<View style={styles.group}>
<Pressable style={styles.single}>
    <Text style={{fontSize:12,fontFamily:'mon'}} >Sort</Text>
    <Image source={require('../../assets/feed/sort.png')} />
</Pressable>

<Pressable style={styles.single} >
    <Text style={{fontSize:12,fontFamily:'mon'}} >Filter</Text>
    <Image source={require('../../assets/feed/filter.png')} />

</Pressable>
</View>

    </View>
  )
}

export default ItemCount

const styles=StyleSheet.create({
    container:{
        display:'flex',
        width:'100%',
        height:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#F9F9F9',
        marginTop:10,
        marginBottom:25,
        paddingHorizontal:10
        
        // backgroundColor:'blue'
    },
    group:{
        display:'flex',
        flexDirection:'row',
        gap:12,
        alignItems:'center',
        justifyContent:'center',
       
        height:24
    },
    single:{
         
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:4,
        justifyContent:'center',
         
        backgroundColor:'white',
         paddingHorizontal:8,
         paddingVertical:5
        
    }
})