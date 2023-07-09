import { Button, View,Text,Image, Pressable,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {firebase} from '../../Config';
const Profile =()=>{
    const navigation=useNavigation()
    const[std,setName]=useState('')
    useEffect(()=>{ 
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setName(snapshot.data())
                //console.log(std['Name'])
            }
            else{
                console.log('User does not exist')
            }
        })
    },[])
    return (
        <View style={{padding:20}}>
            <ScrollView>
            <Image 
             source={require('../Images/student.png')}
             style={{width:80,height:80,borderRadius:100,alignSelf:'center'}}
            />

            <View style={{ padding: 10,borderBottomWidth:1,
                borderBottomColor:'#40B5AD'}}>
                <Text
                style={{opacity:0.5}}
                >Name</Text>
                <Text style={{paddingTop:10,fontSize:16,paddingBottom:10}}>{std['Name']}</Text>
            </View>
            <View style={{ padding: 10,borderBottomWidth:1,
                borderBottomColor:'#40B5AD'}}>
                <Text
                style={{opacity:0.5}}
                >Register Number</Text>
                <Text style={{paddingTop:10,fontSize:16,paddingBottom:10}}>{std['Rollnumber']}</Text>
            </View>
            <View style={{ padding: 10,borderBottomWidth:1,
                borderBottomColor:'#40B5AD'}}>
                <Text
                style={{opacity:0.5}}
                >Department</Text>
                <Text style={{paddingTop:10,fontSize:16,paddingBottom:10}}>{std['Department']}</Text>
            </View>
            <View style={{ padding: 10,borderBottomWidth:1,
                borderBottomColor:'#40B5AD'}}>
                <Text
                style={{opacity:0.5}}
                >Year</Text>
                <Text style={{paddingTop:10,fontSize:16,paddingBottom:10}}>{std['Year']}</Text>
            </View>
            <View style={{ padding: 10,borderBottomWidth:1,
                borderBottomColor:'#40B5AD'}}>
                <Text
                style={{opacity:0.5}}
                >Block & Room Number</Text>
                <Text style={{paddingTop:10,fontSize:16,paddingBottom:10}}>{std['Block']}  -  {std['Roomnumber']} </Text>
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{firebase.auth().signOut()}}
            >
                <Text style={styles.text}>
                    Sign out
                </Text>
            </TouchableOpacity>
    </ScrollView>
        </View>
        
    );
    
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor:'#D03D56',
      marginTop:30,
      maxWidth:170,
      height:50,
      marginLeft:100,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
export default Profile;
