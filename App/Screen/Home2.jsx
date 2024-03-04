import { Image, StyleSheet, Text, View } from 'react-native'


const Home2 = () => {
    return (
        <>
            <View>
                <Text>1/3</Text>
                <Text>Skip</Text>
            </View>

            <View style={{
                justifyContent: "center",
                alignItems: "center", display: "flex",

                height: "100%",
                width: "100%",
            }}  >

                <Image
                    width={200}
                    height={400}
                    source={require('../../assets/home2.png')}



                />
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingHorizontal: 18 }}>
                    <Text style={styles.heading}>Choose Product</Text>

                    <Text  style={styles.normal}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>

                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: "#000",
        fontFamily: 'monbold',

        fontSize: 24,



    },
    normal:{
        color: "#A8A8A9",

textAlign: "center",
fontFamily: "mon",
fontSize: 14,
fontStyle: "normal",
 
lineHeight: 24, /* 171.429% */
letterSpacing: 0.28
    }
});

export default Home2