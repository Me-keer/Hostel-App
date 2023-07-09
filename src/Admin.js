
import {Text,StyleSheet,SafeAreaView,TouchableOpacity,Image,View, Button,ImageBackground } from 'react-native'
import React,{useState,useEffect} from 'react' 
import {firebase} from '../Config'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const Admin=()=>{
    const navigation=useNavigation()
    const[name,setName]=useState('')
    useEffect(()=>{ 
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setName(snapshot.data())
            }
            else{
                console.log('User does not exist')
            }
        })
    },[])
   
    return(
        
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>
                Hello,{name.Name}
            </Text>
            <TouchableOpacity
                    onPress = { ( )=>navigation.navigate('Registration')}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('./Images/student.png')}
                    style={{marginTop:42,height:125,width:125}}
                />
                <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>
                        Student
                </Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress = { ( )=>navigation.navigate('HealthRegistration')}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('./Images/healthcare.png')}
                    style={{marginTop:42,height:125,width:125}}
                />
                <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>
                            HealthCare
                </Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress = { ( )=>navigation.navigate('LaundryRegistration')}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('./Images/laundry.png')}
                    style={{marginTop:42,height:125,width:125}}
                />
                <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>
                            Laundry
                </Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress = { ( )=>navigation.navigate('MessRegistration')}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('./Images/mess.png')}
                    style={{marginTop:42,height:125,width:125}}
                />
                <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>
                            Mess
                </Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress = { ( )=>navigation.navigate('InchargeRegistration')}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('./Images/incharge.png')}
                    style={{marginTop:42,height:125,width:125}}
                />
                <Text style={{fontSize:22,fontWeight:'bold'}}>
                            Incharge
                </Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress = { ( )=>navigation.navigate('UploadFileScreen')}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('./Images/circular.png')}
                    style={{marginTop:42,height:125,width:125}}
                />
                <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>
                            Circular 
                </Text>
        </TouchableOpacity>
        
            <TouchableOpacity
            onPress={()=>{firebase.auth().signOut()}}
            style={styles.button1}
            >
                <Text style={{fontSize:22,fontWeight:'bold'}}>
                    Sign out
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
        
    )
    }
export default Admin
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:100,
        alignItems:'center',

    },
    
    button:{
        marginTop:70,
        height:210,
        width:200,
        backgroundColor:'#40B5AD',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor:'#D03D56',
        marginTop:40,
        maxWidth:170,
        height:50,
        marginLeft:10,
        marginBottom:20,
      }
    
})


