import React, { useState,useEffect } from 'react';
import { StyleSheet, View,Alert, ImageBackground, Image, TextInput, TouchableOpacity, Text,Button} from 'react-native';
import {firebase}from '../../../Config'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


const Rc = () => {
  const navigation=useNavigation()
  const [Request,setRequest]=useState('')
  registerRc=async(Name,Regno,Blockn,Room,Request,Status)=>{
                
    await firebase.app().firestore().collection('Request')
     .add({
         Blockn,
         Request,
         Name,
         Regno,
         Room,
         Status
     }).then(()=>{
         Alert.alert("Request Sent");
         navigation.navigate('Rc');
     })
 
}
const[Std,setStd]=useState('')
    useEffect(()=>{ 
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setStd(snapshot.data())
                //console.log(Std['Name'])
            }
            else{
                console.log('User does not exist')
            }
        })
    },[])
  return (
    <ScrollView>
    <View style={styles.container}>
      
        <View style={styles.formContainer}>
          <View style={styles.card}>
          <Text style={styles.input}>
            {Std['Name']}
            </Text>
          </View>
          <View style={styles.card}>
          <Text style={styles.input}>{Std['Rollnumber']}</Text>
          </View>
          <View style={styles.card}>
          <Text
              style={styles.input}>{Std['Block']}</Text>
          </View>
          <View style={styles.card}>
          <Text
              style={styles.input}>{Std['Roomnumber']}</Text>
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Reason"
              style={styles.input}
              onChangeText={(Request)=>setRequest(Request)}
              autoCorrect={false}
            />
          </View>
          
          <TouchableOpacity style={styles.loginButton} 
          onPress={()=>registerRc(Std['Name'],Std['Rollnumber'],Std['Block'],Std['Roomnumber'],Request,"No")}>
            <Text style={styles.loginButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(116,206,200,0.7)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    padding:20,
    borderRadius:10,
    backgroundColor:'rgba(255, 255, 255, 0.3)'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#B0C4DE'
  },
  loginButton: {
    backgroundColor: '#7B68EE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Rc