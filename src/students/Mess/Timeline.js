
import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert,SafeAreaView} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../../Config'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Timeline from 'react-native-timeline-flatlist';

const  Timelinem=({route})=>{
  const navigation=useNavigation();
  console.log("Timeline");
  console.log(route.params.datavalue)
  let i
  let j=0
  let k=0
  let l=0
  let m=0
  const [time1,settime1]=useState("");
  const [time2,settime2]=useState("");
  const [time3,settime3]=useState("");
  const [time4,settime4]=useState("");
  const datavalues=route.params.datavalue
  for( i=0;i<datavalues.length;i++){
    if(datavalues[i].Time==="Breakfast"){
        j=i
    }
    else if(datavalues[i].Time==="Lunch"){
      k=i
    }
    else if(datavalues[i].Time==="Snacks"){
      l=i
    }
    else if(datavalues[i].Time==="Dinner"){
      m=i
    }
  }
  console.log(time1)
    const data = [
      {time: '09:00', title: 'Breakfast', description: datavalues[j].Menu},
      {time: '10:45', title: 'Lunch', description:datavalues[k].Menu},
      {time: '14:00', title: 'Snacks', description: datavalues[l].Menu},
      {time: '16:30', title: 'Dinner', description:datavalues[m].Menu}
    ]

    return (
      <Timeline
      data={data}
      circleSize={20}
        circleColor="rgba(0,0,0,0)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        innerCircle={'icon'}
    />
    );
};
const styles = StyleSheet.create({
  
});
export default Timelinem;
