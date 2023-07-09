import {View,Text,TouchableOpacity,TextInput,StyleSheet,Alert} from 'react-native'
import React,{useState} from 'react'
import {firebase}from '../../Config'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
const Add_contacts=()=>{
    const navigation=useNavigation()
    const [Name,setName]=useState('')
    const [Specialization,setSpecialization]=useState('')
    const [Contact,setContact]=useState('')
     registerUser=async(Name,Specialization,Contact)=>{
                
                   await firebase.app().firestore().collection('Healthcare')
                    .add({
                        Name,
                       Specialization,
                       Contact
                    }).then(()=>{
                        Alert.alert("Contact Added");
                        navigation.navigate('Contacts');
                    })
                
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
                    placeholder="Specialization"
                    onChangeText={(Specialization)=>setSpecialization(Specialization)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Contact"
                    onChangeText={(Contact)=>setContact(Contact)}
                    autoCapitalize={false}
                    autoCorrect={false}
                    keyboardType="email-address"
                />
            </View>
            <TouchableOpacity
                onPress={()=>registerUser(Name,Specialization,Contact)}
                style={styles.button}
            >
                <Text style={{fontWeight:'bold',fontSize:22}}>Register</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default Add_contacts
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
        marginBottom:20,
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})