import { ScrollView, Text, View } from "react-native"
import Nav from "../../components/Nav"
import Search from "../../components/Search"
import ItemCount from "../../components/ItemCount"
import CategoryCircle from "../../components/CategoryCircle"
import Poster from "../../components/Poster"
import Banner from "../../components/Banner"
import ProductCard from "../../components/ProductCard"
import ProductContainer from "../../components/ProductContainer"
import Arrival from "../../components/Arrival"

 
const Feed = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16,backgroundColor:'#F9F9F9',height:'100%'}}>
 <Nav/>
 <Search/>
 <ItemCount/> 
 <CategoryCircle/>
 <Poster/>
 <Banner mainText={'Deal of the Day'} lowText={'22h 55m 20s remaining'} bgCol={'#4392F9'} />
 
 <ProductContainer/>

 <Banner mainText={'Trending Products'} lowText={'Last Date: 29/02/022'} bgCol={'#FD6E87'} />

 <ProductContainer/>
 <Arrival/>

    </ScrollView>
  )
}

export default Feed