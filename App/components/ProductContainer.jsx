import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'


let datas = [
    {
        pName: 'Women Printed Kurta',
        pDesc: 'Oriented from pure silk with zero carbon',
        price: '$175',
        former: '$200',
        dis: "15%Off",
        img: '../../assets/feed/shoe.png'
    },
    {
        pName: 'HBK Training Shoe',
        pDesc: 'Long lasting trekking shoe for mens',
        price: '$145',
        former: '$180',
        dis: "25%Off",
        img: '../../assets/feed/shoe.png'
    },
]
const ProductContainer = () => {
    return (
    
 <FlatList  horizontal={true} keyExtractor={(item, index) => index.toString()} data={datas} showsHorizontalScrollIndicator={false} renderItem={({item:item})=>{return(
    <ProductCard item={item}/>

 )
        }} />
  

       
    )
}

export default ProductContainer