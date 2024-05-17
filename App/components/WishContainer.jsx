import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import shoeImg from '../../assets/feed/shoe.png'
import addidas from '../../assets/feed/image 18.png'
import cloth from '../../assets/feed/cloth.png'
import cloth1 from '../../assets/feed/image 18(1).png'




let datas = [
{
pName: 'Women Printed Kurta',
pDesc: 'Oriented from pure silk with zero carbon',
price: '$175',
former: '$200',
dis: "15%Off",
img: shoeImg
},
// {
// pName: 'HBK Training Shoe',
// pDesc: 'Long lasting trekking shoe for mens',
// price: '$145',
// former: '$180',
// dis: "25%Off",
// img: cloth
// },
{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: addidas
},{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: cloth
},{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: cloth1
}
,{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: cloth
},{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: shoeImg
},{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: cloth1
},{
pName: 'Addidas Shoe',
pDesc: 'Long lasting trekking shoe for mens',
price: '$145',
former: '$180',
dis: "25%Off",
img: shoeImg
},
]
const WishContainer = () => {
return (
<View style={{ height:"100%", flexDirection:'row',display:'flex',flexShrink:0,flexWrap:'wrap',flex:1,justifyContent:'center',alignItems:"center" }} >
{
datas.map((item,i)=>{
return(
<View key={i} style={styles.container} >
<Image style={styles.image} source={item.img} />


<View style={styles.textCon} >
<Text style={styles.productName} >{item.pName}</Text>
<Text style={styles.desc} >{item.pDesc}</Text>
<Text style={styles.price}>{item.price}</Text>
<View style={{flexDirection:'row',alignItems:'flex-end',gap:3}} >
<Text style={{textDecorationLine: 'line-through',fontSize:14,color:'grey',fontFamily:'mon'}} >{item.former} </Text>
<Text style={{   textDecorationLine: 'none',fontSize:14,color:'red',fontFamily:'mon'}}>{item.dis}</Text>
</View>

</View>
</View>
)
})
}





</View>
)
}

export default WishContainer


const styles=StyleSheet.create({
container:{
width: '45%',


borderRadius:5,
display:'flex',
gap:1,
borderRadius:7,
marginRight:10,
marginBottom:16,
paddingBottom:4,
 
 
borderBottomWidth:2,
borderColor:'#7d7b7a'


},
productName:{
fontSize:15,
fontFamily:'mon',
paddingBottom:4
},
desc:{
color:'grey',
fontSize:12,
fontFamily:'mon'

},
textCon:{
width:"100%",

},
price:{
fontSize:15,
fontWeight:"600",
fontFamily:'mon',
paddingVertical:3

},
image:{
width:"max-content",
objectFit:'contain',

maxHeight:150,
borderRadius:10



}
})