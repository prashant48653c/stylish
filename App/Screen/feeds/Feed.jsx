import { Text, View } from "react-native"
import Nav from "../../components/Nav"
import Search from "../../components/Search"
import ItemCount from "../../components/ItemCount"

 
const Feed = () => {
  return (
    <View style={{marginHorizontal:16,backgroundColor:'#F9F9F9',flex:1}}>
 <Nav/>
 <Search/>
 <ItemCount/>
    </View>
  )
}

export default Feed