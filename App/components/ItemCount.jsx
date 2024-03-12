import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const ItemCount = () => {
  return (
    <View style={styles.container}>
<Text style={{fontSize:18}} >All Featured</Text>

<View style={styles.group}>
<Pressable style={styles.single}>
    <Text  >Sort</Text>
    <Image source={require('../../assets/feed/sort.png')} />
</Pressable>

<Pressable>
    <Text>Filter</Text>
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
        height:22,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    group:{
        display:'flex',
        flexDirection:'row',
        gap:12,
        alignItems:'center',
        justifyContent:'center',
        width:200
    },
    single:{
        
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:4,
        justifyContent:'center',
        paddingVertical:8,
        paddingHorizontal:6,
        backgroundColor:'white',
        width:80,
        height:22
    }
})