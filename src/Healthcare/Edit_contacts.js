import {View,Text,TouchableOpacity,TextInput,StyleSheet,Alert,EdiText} from 'react-native'
import React,{useState} from 'react'
import {firebase}from '../../Config'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
const Edit_contacts=({route})=>{
    const name1=route.params.name;
    const navigation=useNavigation()
    const [Name,setName]=useState(route.params.name)
    const [Specialization,setSpecialization]=useState(route.params.Specialization)
    const [Contact,setContact]=useState(route.params.Contact)
     registerUser1=async(Name1,Specialization1,Contact1)=>{
        const dbRef = firebase.firestore().collection('Healthcare')
        dbRef.onSnapshot(
      QuerySnapshot=>{
        QuerySnapshot.forEach((doc)=>{
            if(doc.data()['Name']===name1){
                console.log(doc.data()['Name'])
                doc.ref.set({
                    Name:Name1,
                    Specialization:Specialization1,
                    Contact:Contact1
                }).then(()=>{
                    Alert.alert("Contact Updated");
                    navigation.navigate('Contacts');
                })
            }
        })
      }
    )
                
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
                    value={Name}
                    onChangeText={(Name)=>setName(Name)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    value={Specialization}
                    onChangeText={(Specialization)=>setSpecialization(Specialization)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    value={Contact}
                    onChangeText={(Contact)=>setContact(Contact)}
                    autoCapitalize={false}
                    autoCorrect={false}

                />
            </View>
            <TouchableOpacity
                onPress={()=>registerUser1(Name,Specialization,Contact)}
                style={styles.button}
            >
                <Text style={{fontWeight:'bold',fontSize:22}}>Update</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default Edit_contacts
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