import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"


const Login = () => {
return (
<View style={{ borderWidth: 1, borderColor: "blue", height: "100%", width: "100%", paddingLeft: 15, paddingRight: 15 }}>
<View style={{
width: 189,
height: 83,
flexShrink: 0,
marginTop: 9,

}}>
<Text style={{
color: '#000',
fontFamily: 'mon',
fontSize: 36,
fontStyle: 'normal',
fontWeight: 700,
lineHeight: 43,
textAlign: "justify"
}}>Welcome Back!</Text>
</View>


<View style={{ marginTop: 36, display: "flex", gap: 31 }}>

<View style={{
maxWidth: 317,
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
maxWidth: 317,
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
width: 68



}} placeholder={'Password'} />



<View style={{ display: "flex", alignItems: "flex-end", marginLeft: 150 }}>
<Image style={{
width: 20,
height: 20,
marginRight: 16
}} source={require('../../../assets/icons/eye.png')} />

</View>

<View style={{
position: "absolute",
top: 59,
right: 1
}} >

<Text style={{
color: '#F83758',
textAlign: 'center',
fontFamily: 'mon',
fontSize: 12,
fontWeight: 500,
fontStyle: 'normal',
}}>Forgot Password?</Text></View>

</View>



</View>
<TouchableOpacity style={{ display: 'flex',
    maxWidth: 317,
    height: "fit-content",
    paddingVertical: 21,
    paddingHorizontal: 109,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  
    borderRadius: 4,
    backgroundColor: '#F83758',
    flexShrink: 0,
    marginTop:76
    }} > 
<Text style={{color: '#FFF',
    fontFamily: 'mon',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 600,
 
     }}>Login</Text>
</TouchableOpacity> 


</View>
)
}

export default Login