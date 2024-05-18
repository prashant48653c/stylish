import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Success() {
const navigation = useNavigation();
return (
<View style={{ width: '100%', height: "100%", flexDirection: 'row', justifyContent: "center", alignItems: 'center' }} >
<View style={{ width: "90%", height: 400, backgroundColor: "#FC8EAC", borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
<Text style={{ fontSize: 29, marginBottom: 20, color: 'white', fontWeight: 800, textAlign: 'center' }} >Payment done successfully</Text>
<Button title="Back to feed" onPress={() => navigation.navigate('login')} />
</View>
</View>
)
}