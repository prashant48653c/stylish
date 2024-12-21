import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemCount from '../../components/ItemCount'
import Search from '../../components/Search'
import Nav from '../../components/Nav'
import ProductContainer from '../../components/ProductContainer'
import ProductCard from '../../components/ProductCard'
import WishContainer from '../../components/WishContainer'

const Wish = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={{marginHorizontal:16,backgroundColor:'#F9F9F9'}}>
 <Nav/>
 <Search/>
 <ItemCount  text={"45,000+ Items"} /> 
 <WishContainer/>
  
 
 
 

  

 

    </ScrollView>
  )
}

export default Wish