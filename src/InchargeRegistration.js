import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import {firebase}from '../Config'
import { ScrollView } from "react-native-gesture-handler";

const InchargeRegistration=({navigation})=>{
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [Name,setName]=useState('')
    const [adminid,setadminid]=useState('')
    const [Description,setDescription]=useState('')
    const [PhoneNumber,setPhoneNumber]=useState('')
    const [Period,setPeriod]=useState('')
    const [Block,setBlock]=useState('')
    const mode='Incharge'
    registerUser=async(email,password,Name,adminid,Description,PhoneNumber,Period,Block,mode)=>{
            await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp:true,
                    url:'https://hostelmanagement-4cf09.firebaseapp.com/',
                })
                .then(()=>{
                    alert('Verification email sent')
                }).catch((error)=>{
                    alert(error.message)
                })
                .then(()=>{
                    firebase.firestore().collection('users')
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        Name,
                        adminid,
                        Description,
                        PhoneNumber,
                        Period,
                        Block,
                        mode
                    })
                })
                .catch((error)=>{
                    alert(error.message)
                })
            })
            .catch((error=>{
                alert(error.message)
            }))
    }
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={{fontWeigh:'bold','fontSize':23}}>
                Register Here!!
            </Text>
            <View style={{marginTop:40}}>
                <TextInput
                    style={styles.TextInput}
                    placeholder=" Name"
                    onChangeText={(Name)=>setName(Name)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Admin ID"
                    onChangeText={(adminid)=>setadminid(adminid)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    onChangeText={(email)=>setEmail(email)}
                    autoCapitalize={false}
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Work - Description"
                    onChangeText={(Description)=>setDescription(Description)}
                    autoCapitalize={false}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone Number"
                    onChangeText={(PhoneNumber)=>setPhoneNumber(PhoneNumber)}
                    autoCapitalize={false}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    onChangeText={(password)=>setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />

            </View>
            <TouchableOpacity
                onPress={()=>registerUser(email,password,Name,adminid,Description,PhoneNumber,Period,Block
                ,mode)}
                style={styles.button}
            >
                <Text style={{fontWeight:'bold',fontSize:22}}>Register</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default InchargeRegistration
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,

    },
    TextInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'
    },
    button:{
        alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
            elevation: 3,
            backgroundColor:'#D03D56',
            marginTop:20,
            maxWidth:170,
            height:50,
            marginLeft:10,
            marginBottom:30,
    }
})