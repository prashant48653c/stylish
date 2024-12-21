import { useNavigation } from "@react-navigation/native";
import { signInWithPopup } from "firebase/auth";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Button } from "react-native-paper";
import { auth, Provider } from "../../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
 


const Create = () => {
  const navigation=useNavigation()
  const handleSignUp=()=>{
    navigation.navigate('feed')
  }

  const handleGoogleClick= async ()=>{
    const data = await signInWithPopup(auth, Provider);
    console.log(data);

    const newdata = JSON.stringify(data);
    await AsyncStorage.setItem("@userData", newdata);
  }

return (
    <ScrollView  style={styles.containerView} >
<View style={{ height: "100%", width: "100%", paddingLeft: 15, paddingRight: 15 }}>
<View style={{
width: 189,
 
 
marginTop: 9,

}}>
<Text style={{
color: '#000',
fontFamily: 'mon',
fontSize: 36,
fontStyle: 'normal',
fontWeight: 700,
lineHeight: 43,
textAlign: "left"
}}>Create an Account</Text>
</View>


<View style={{ marginTop: 36, display: "flex", gap: 31 }}>

<View style={{
maxWidth: "100%",
height: 55,
flexShrink: 0,
backgroundColor: '#F3F3F3',
borderWidth: 1,
borderColor: '#A8A8A9',
borderRadius: 10,
display: "flex",
flexDirection: "row",
alignItems: "center",

paddingHorizontal: 11,
paddingVertical: 15,


}} >
<Image style={{
width: 24,
height: 24,
marginRight: 3
}} source={require('../../../assets/icons/User.png')} />
<TextInput style={{ color: '#676767', }} placeholder={'Username or Email'} />

</View>

 
<View style={{
maxWidth: "100%",
height: 55,
flexShrink: 0,
backgroundColor: '#F3F3F3',
borderWidth: 1,
borderColor: '#A8A8A9',
borderRadius: 10,
display: "flex",
flexDirection: "row",
alignItems: "center",


paddingHorizontal: 15,
paddingVertical: 15,
position: "relative"


}} >
<Image style={{
width: 16,
height: 20,
marginRight: 11
}} source={require('../../../assets/icons/lock.png')} />


<TextInput style={{
color: '#676767',
flex: 1

}} placeholder={'Password'} />



<View style={{ alignContent: "flex-end" }}>
<Image style={{
width: 20,
height: 20,

}} source={require('../../../assets/icons/eye.png')} />

</View>





 

</View>

{/* new wala */}

<View style={{
maxWidth: "100%",
height: 55,
flexShrink: 0,
backgroundColor: '#F3F3F3',
borderWidth: 1,
borderColor: '#A8A8A9',
borderRadius: 10,
display: "flex",
flexDirection: "row",
alignItems: "center",


paddingHorizontal: 15,
paddingVertical: 15,
position: "relative"


}} >
<Image style={{
width: 16,
height: 20,
marginRight: 11
}} source={require('../../../assets/icons/lock.png')} />


<TextInput style={{
color: '#676767',
flex: 1

}} placeholder={'Confirm Password'} />



<View style={{ alignContent: "flex-end" }}>
<Image style={{
width: 20,
height: 20,

}} source={require('../../../assets/icons/eye.png')} />

</View>





<View style={{
position: "absolute",
top: 69,
left: 1
}} >

<Text style={{
color: '#676767',
textAlign: 'left',
fontFamily: 'mon',
fontSize: 12,
fontWeight: 500,
fontStyle: 'normal',
maxWidth:250
}}>By clicking the <Text style={{color:'#FF4B26'}} >Create Account</Text> button, you agree to the public offer</Text></View>

</View>

</View>


<TouchableOpacity  onPress={handleSignUp} style={{
display: 'flex',
maxWidth: "100%",
height: 53,
display: 'flex',

justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',


borderRadius: 4,
backgroundColor: '#F83758',
flexShrink: 0,
marginTop: 76
}} >
<Text style={{
color: '#FFF',
fontFamily: 'mon',
fontSize: 20,
fontStyle: 'normal',
fontWeight: 600,

}}>Create Account</Text>
</TouchableOpacity>




<View style={{ display: 'flex', alignItems: 'center' }}>
<Text style={styles.lastText} >- OR Continue with -</Text>
<View>
<View style={{ display: "flex", flexDirection: 'row', gap: 10, justifyContent: "center",marginTop:20 }}>

<TouchableOpacity onPress={handleGoogleClick} style={styles.image}>
<Image style={{
width: 24,
height: 24,



}} source={require('../../../assets/icons/google 1.png')} />
</TouchableOpacity>

<View style={styles.image}>
<Image style={{
width: 24,
height: 24,



}} source={require('../../../assets/icons/apple 1.png')} />
</View>

<View style={styles.image}>
<Image style={{
width: 24,
height: 24,



}} source={require('../../../assets/icons/facebook-app-symbol 1.png')} />
</View>

</View>

<View>


<View style={styles.lastText}> 
 <Text style={{fontSize:14}} >Already have an account?</Text>

 <TouchableOpacity style={{alignItems:"center",}} onPress={()=>navigation.navigate('login')}>
 <Text style={{color: "red",paddingRight:5,alignItems:'center',fontWeight:600,textAlign:'center' }} >SignUp</Text>
 
 </TouchableOpacity>
 
 
 
 
 
 </View>
 </View>
</View>
</View>


</View>
</ScrollView>
)
}

export default Create

const styles = StyleSheet.create({
continueWith: {
marginTop: 75,
display: 'flex',
alignItems: 'center',
gap: 20
},
containerView: {
    flex: 1,
    backgroundColor: '#fff',
    
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 17
  },
image: {
borderRadius: 333,
padding: 15,
borderRadius: 33,

backgroundColor: '#FCF3F6',
borderWidth: 1,
borderColor: '#F83758',
},
lastText: {
  fontFamily: 'mon',
  fontSize: 14,
   flexDirection:'row',
   alignItems:'center',
  color: '#575757',
  gap:4,
  marginTop:20,
  justifyContent:'center'
}
});