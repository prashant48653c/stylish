import { StyleSheet, Text, View,Image } from 'react-native';

const Home1 = () => {
  return (
    <View style={{ justifyContent:"center",
    alignItems:"center",  display:"flex",
   
    height:"100%",
    width:"100%",}}  >

    <Image
    width={200}
    height={100}
    source={require('../../assets/homelogo.png')}
        
         
        
      />
 
    </View>
  )
}



export default Home1