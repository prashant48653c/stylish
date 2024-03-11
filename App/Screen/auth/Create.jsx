import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const Create = () => {
return (
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
}}>By clicking the <Text style={{color:'#FF4B26'}} >Register</Text> button, you agree to the public offer</Text></View>

</View>

</View>


<TouchableOpacity style={{
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

<View style={styles.image}>
<Image style={{
width: 24,
height: 24,



}} source={require('../../../assets/icons/google 1.png')} />
</View>

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

<Text style={styles.lastText} >Create An Account <Text style={{color: "#F83758",paddingRight:5 }}>Sign Up</Text> </Text>
</View>
</View>


</View>
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
marginTop:29,
color: '#575757'
}
});