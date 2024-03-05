import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

const Home2 = () => {

const [step, setStep] = useState(1)

const addStep=()=>{
    if(step < 3){
        setStep(step + 1)
        console.log("hello")
    }
}
const minusStep=()=>{
    if(step > 1){
        setStep(step - 1)
    }
}



return (
<>
<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
<Text style={styles.num}><Text style={{ color: "black" }} >{step}</Text>/3</Text>
<Text style={{ ...styles.num, color: "black" }} >Skip</Text>
</View>

<ScrollView contentContainerStyle={{
justifyContent: "space-between",
alignItems: "center", display: "flex",
 
height: "100%",
width: "100%",

}}  >

<View style={{marginTop:110,height:426,display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
    {
        step === 1 ?
<Image
  width={300}
  height={300}
  source={require(`../../assets/home2.png`)}
/>
:
step === 2?
<Image
  width={300}
  height={300}
  source={require(`../../assets/home3.png`)}
  style={{marginBottom:25}}
/>
:
<Image
  width={300}
  height={300}
  source={require(`../../assets/home4.png`)}
/>
    }


<View style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
<Text style={styles.heading}>Choose Product</Text>

<Text style={styles.normal}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>

</View>
</View>


 
<View style={{ ...styles.next }}>
    
<Pressable onPress={minusStep} style={{
width: 44,
height: 22.8, display: "flex", alignItems: "center"
}}>
<Text style={{
color: '#C4C4C4',
textAlign: 'center',
fontFamily: 'mon',
fontSize: 18,
fontStyle: 'normal',
fontWeight: 600,
}}>
Prev</Text>
</Pressable>



<View >
    {
        step ===1 ?
<Image source={require('../../assets/home2circle.png')} />
:
step ===2 ?
<Image source={require('../../assets/home3circle.png')} />
:
<Image source={require('../../assets/home4circle.png')} />

    }

</View>

<Pressable onPress={addStep}  style={{
width: 44,
height: 22.8, display: "flex", alignItems: "center"
}}>
<Text style={{
color: '#F83758',
textAlign: 'center',
fontFamily: 'mon',
fontSize: 18,
fontStyle: 'normal',
fontWeight: 600,
}}>Next</Text>
</Pressable>

</View>

 


</ScrollView>
</>
)
}

const styles = StyleSheet.create({
heading: {
color: "#000",
fontFamily: 'monbold',

fontSize: 24,



},
normal: {
color: "#A8A8A9",

textAlign: "center",
fontFamily: "mon",
fontSize: 14,
fontStyle: "normal",

lineHeight: 24, /* 171.429% */
letterSpacing: 0.28
},
num: {
color: '#A0A0A1',
fontFamily: 'mon',
fontSize: 18,
fontStyle: 'normal',



},
next: {
width: '100%',
height: 23,
gap: 74,
display: "flex",
flexDirection: "row",
justifyContent: "space-between",
paddingBottom:22,
alignItems: "center",

}
});

export default Home2