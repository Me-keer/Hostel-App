import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import { FlatList } from 'react-native-gesture-handler';
const  History_laundry=()=>{
  const navigation=useNavigation()
  const [users,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Laundry');
  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const users=[]
        QuerySnapshot.forEach((doc)=>{
            console.log(doc.data().Name)
          if(doc.data().Finished==='Yes')
          users.push(doc.data())
        })
        setUsers(users)
      }
    )

  },[])


  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,alignItems:'center'}}>Laundry History</Text>
        <Text style={{fontSize:20, paddingTop:20,paddingBottom:10, flexDirection:'row'}}>    Name      Roll No        Weight   Date                 </Text>
        <FlatList
          data={users}
          numColumns={1}
          renderItem={({item})=>(
            <Pressable>
            <View style={{    height: 30}}>
            </View>
            <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{item.Name}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{item.Register }</Text>
            </View>
            <View style={styles.SpecializedContainer}>
                <Text style={styles.Specialization}>{item.Weight}</Text>
            </View>
            <View style={styles.DateContainer}>
                <Text style={styles.Specialization}>{item.currentDate}</Text>
            </View>
        </View>
            </Pressable>
          )}
        />
        <Text style={{paddingTop:40}}>
        <Button
            onPress = { ( )=>navigation.navigate('HomePage')}
        title="Back "
      />
        </Text>
        </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 50,
    },
    SpecializedContainer:{
      backgroundColor: '#3E3364',
      borderRadius: 12,
      alignItems: 'center',
      marginRight:10,
      justifyContent: 'center',
      width: 40,
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
    DateContainer:{
      backgroundColor: '#3E3364',
      borderRadius: 12,
      alignItems: 'center',
      marginRight:10,
      justifyContent: 'center',
      width: 100,
      height: 50,
    },
    taskContainer: {
      backgroundColor: '#3E3364',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:10,
      width: 100,
      height: 50,
    },
    task: {
        color: '#fff',
        fontSize: 16,
    },
});
export default History_laundry;
