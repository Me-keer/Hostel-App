import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import { FlatList } from 'react-native-gesture-handler';
function complaint_done(doc1){
    const dbRef = firebase.firestore().collection('Request')
          dbRef.onSnapshot(
        QuerySnapshot=>{
          QuerySnapshot.forEach((doc)=>{
              if(doc.data()['Regno']===doc1.Regno){
                  console.log(doc.data()['Name'])
                  doc.ref.set({
  
                      Name:doc1.Name,
                     Regno:doc1.Regno,
                     Room:doc1.Room,
                     Blockn:doc1.Blockn,
                     Request:doc1.Request,
                     Status:'yes'
                  }).then(()=>{
                      Alert.alert("Record Updated");
                  })
              }
          })
        }
          )
  }
const  RoomChangeHome=()=>{
  const navigation=useNavigation()
  const [complaints,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Request');
  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const complaints=[]
        QuerySnapshot.forEach((doc)=>{
            if(doc.data()['Status']==="No"){
          complaints.push(doc.data())
            }
        })
        setUsers(complaints)
      }
    )

  },[])


  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,paddingLeft:30, paddingTop:20,paddingBottom:10, flexDirection:'row'}}>Name              Contact No         Specialization</Text>
        <FlatList
          data={complaints}
          numColumns={1}
          renderItem={({item})=>(
            <Pressable>
            <View style={{    height: 30}}>
            </View>
            <View style={styles.container}>
            <View style={styles.SpecializedContainer}>
                <Text style={styles.index}>{item.Name}</Text>
            </View>
            <View style={styles.SpecializedContainer}>
                <Text style={styles.task}>{item.Regno}</Text>
            </View>
            <View style={styles.indexContainer}>
                <Text style={styles.Specialization}>{item.Room}</Text>
            </View>
            <View style={styles.SpecializedContainer}>
                <Text style={styles.Specialization}>{item.Request}</Text>
            </View>
            <View style={styles.SpecializedContainer}>
                <Text style={styles.Specialization}>{item.Blockn}</Text>
            </View>
        <TouchableOpacity
                    onPress = { ( )=>complaint_done(item)}
                    style={styles.button}
                    activeOpacity={0.5}>
                <Image
                    source={require('../Images/tick.png')}
                    style={{marginTop:15,height:30,width:30,marginLeft:20}}
                />
        </TouchableOpacity>
        </View>
            </Pressable>
          )}
        />
        <Text style={{paddingTop:40}}>
            <Button
            onPress = { ( )=>navigation.navigate('History_requests')}
        title="History "
      />
        </Text>
        <Text ></Text>
        </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 0,
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginLeft:0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    SpecializedContainer:{
      backgroundColor: '#3E3364',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      height: 50,
    },
    Specialization:{
      color: '#fff',
        fontSize: 16,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
      backgroundColor: '#3E3364',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:20,
      width: 100,
      height: 50,
    },
    task: {
        color: '#fff',
        fontSize: 16,
    },
});
export default RoomChangeHome;
