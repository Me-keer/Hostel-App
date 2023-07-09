import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert,SafeAreaView} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Addlaundry from '../Laundry/Addlaundry';
import History_laundry from '../Laundry/History_laundry';
const  MessPage=()=>{
  const navigation=useNavigation()
  const todoRef=firebase.firestore().collection('Mess');
  const [day1,setday1]=useState([]);
  const [day2,setday2]=useState([]);
  const [day3,setday3]=useState([]);
  const [day4,setday4]=useState([]);
  const [day5,setday5]=useState([]);
  const [day6,setday6]=useState([]);
  const [day7,setday7]=useState([]);

  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const day1=[]
        const day2=[]
        const day3=[]
        const day4=[]
        const day5=[]
        const day6=[]
        const day7=[]
        QuerySnapshot.forEach((doc)=>{
          if(doc.data().Day==='Monday')
            day1.push(doc.data())
          else if(doc.data().Day==='Tuesday')
            day2.push(doc.data())
          else if(doc.data().Day==='Wednesday')
            day3.push(doc.data())
          else if(doc.data().Day==='Thursday')
            day4.push(doc.data())
          else if(doc.data().Day==='Friday')
            day5.push(doc.data())
          else if(doc.data().Day==='Saturday')
            day6.push(doc.data())
          else if(doc.data().Day==='Sunday')
            day7.push(doc.data())

        })
        setday1(day1)
        setday2(day2)
        setday3(day3)
        setday4(day4)
        setday5(day5)
        setday6(day6)
        setday7(day7)
        console.log(day1)
      }
    )

  },[])
  return (
    <ScrollView>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess',{
  datavalue: day1})}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Monday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess')}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Tuesday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess')}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Wednesday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess')}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Thursday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess')}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Friday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess')}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Saturday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('Timelinemess')}
                style={styles.button}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Sunday</Text>
    </TouchableOpacity>
    <TouchableOpacity
                onPress={()=>navigation.navigate('AddMess')}
                style={styles.button1}
            >
            <Text style={{fontWeight:'bold',fontSize:22,aligniItems:'Center'}}>Edit</Text>
    </TouchableOpacity>
    <TouchableOpacity
            style={styles.button1}
            onPress={()=>{firebase.auth().signOut()}}
            >
                <Text style={styles.text}>
                    Sign out
                </Text>
            </TouchableOpacity>
    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    paddingLeft:25,
    marginTop:50,
    marginLeft:100,
    borderRadius: 15,
    elevation: 3,
    width:250,
    backgroundColor: '#75f542',
    height:70
  },
  button1: {
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
export default MessPage;
