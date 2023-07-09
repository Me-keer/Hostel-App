import {View,Text, TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import React,{useState} from 'react' ;
import { useNavigation } from '@react-navigation/native';
import{firebase} from '../Config'
const Login=()=>{
    const navigation=useNavigation()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    loginUser=async(email,password)=>{
        try{
           await firebase.auth().signInWithEmailAndPassword(email,password)
        }catch(error){
            alert(error.message)
        }
    }
    
    return (
        <View style={StyleSheet.container}>
            <Text style={{fontWeight:'bold',fontSize:35,textAlign:'center',paddingTop:50}} >Sign In</Text>
            <View style={{marginTop:40}}>
                <TextInput
                    style={{
                        paddingTop:20,
                        paddingBottom:10,
                        width:350,
                        fontSize:20,
                        backgroundColor:'#40B5AD',
                        marginBottom:10,
                        alignSelf:'center',
                        textAlign:'center',
                        borderRadius:50,
                        color:'#fff',
            
                    }}
                    placeholder="Email"
                    onChangeText={(email)=>setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                </View>
                <View style={{marginTop:40}}>
                   <TextInput
                    style={{
                        paddingTop:20,
                        paddingBottom:10,
                        width:350,
                        fontSize:20,
                        backgroundColor:'#40B5AD',
                        marginBottom:10,
                        alignSelf:'center',
                        textAlign:'center',
                        borderRadius:50,
                        color:'#fff',
                    }}
                    placeholder="Password"
                    onChangeText={(password)=>setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                onPress={()=>loginUser(email,password)}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:30,color:'#fff'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>navigation.navigate('')}
                style={{marginTop:20}}
            >
            </TouchableOpacity>
        </View>
    )
}
export default Login
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,

    },
    TextInput:{
        paddingTop:20,
        paddingBottom:10,
        width:250,
        fontSize:15,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center',
        color:'#fff',
    },
    button:{
        alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 25,
      elevation: 3,
      backgroundColor:'#D03D56',
      marginTop:30,
      maxWidth:170,
      height:70,
      marginLeft:120,
    }
})