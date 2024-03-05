import { Text, TextInput, View } from "react-native"


const Login = () => {
    return (
        <View style={{ borderWidth: 1, borderColor: "blue", height: "100%", width: "100%", paddingHorizontal: 15 }}>
            <View style={{
                width: 185,
                height: 83,
                flexShrink: 0,
                marginTop: 9
            }}>
                <Text style={{
                    color: '#000',
                    fontFamily: 'mon',
                    fontSize: 36,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 43
                }}>Welcome Back!</Text>
            </View>


            <View>
                <TextInput style={{ width: 317,
  height: 55,
  flexShrink: 0,
  backgroundColor: '#F3F3F3'
  
  }} placeholder={'Username or Email'} />

               
            </View>

        </View>
    )
}

export default Login