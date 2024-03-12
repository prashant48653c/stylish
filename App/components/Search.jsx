import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

const Search = () => {
return (
<View style={styles.search}>
<Image source={require('../../assets/feed/search.png')} />
<View style={{flex:1,alignContent:'flex-start',paddingLeft:10,}}>
<TextInput
style={{fontSize:14,color:'#bbb', }}
placeholder="Search any Product"

/>
</View>

<Image source={require('../../assets/feed/mic.png')} />

</View>
)
}

export default Search



const styles = StyleSheet.create({
 search:{
    display:'flex',
    width:'100%',
    height:40,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:16,
    height: 40,
    borderColor:'white',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#FFF',  
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 9,
    shadowOpacity: 1,
    
 }
   
   
  });