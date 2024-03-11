import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const Forget = () => {
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
}}>Forgot
password?</Text>
</View>


<View style={{ marginTop: 36, display: "flex", gap: 31 }}>

 
 
 
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
width: 26,
height: 20,
flexShrink:0,
marginRight: 11
}} source={require('../../../assets/icons/Shape.png')} />


<TextInput style={{
color: '#676767',
flex: 1

}} placeholder={'Enter your email address'} />



 





<View style={{
position: "absolute",
top: 79,
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
}}>* We will send you a message to set or reset your new password</Text></View>

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
marginTop: 86
}} >
<Text style={{
color: '#FFF',
fontFamily: 'mon',
fontSize: 20,
fontStyle: 'normal',
fontWeight: 600,

}}>Submit</Text>
</TouchableOpacity>




 


</View>
)
}

export default Forget

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