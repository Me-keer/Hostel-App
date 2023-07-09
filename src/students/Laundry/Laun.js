
import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../../Config'
import { FlatList } from 'react-native-gesture-handler';
const  Laun=()=>{
  const navigation=useNavigation()
  const [users,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Laundry');
  const[std,setName]=useState('')
  useEffect(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
        if(snapshot.exists){
            setName(snapshot.data().Name)
            console.log(snapshot.data())
        }
        else{
            console.log('User does not exist')
        }
    })

  },[])
  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const users=[]
        QuerySnapshot.forEach((doc)=>{
          if(doc.data().Name===std['Name'])
          users.push(doc.data())
        })
        setUsers(users)
      }
    )

  },[])

  return (
    
        <FlatList
          data={users}
          numColumns={1}
          renderItem={({item})=>(
            <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.name}>{item.Name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Register no:</Text>
                <Text style={styles.price}>{item.Register}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Weight:</Text>
                <Text style={styles.price}>{item.Weight}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Date:</Text>
                <Text style={styles.price}>{item.currentDate}</Text>
              </View>
            </View>
          </View>
          )}
        />
  
  );
};
const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      margin: 16,
      overflow: 'hidden',
      backgroundColor: '#8cd2cd',
      elevation: 5,

    },
    image: {
      width: '50%',
      height: 20,
      resizeMode: 'cover',
    },
    content: {
      padding: 16,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#000',
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
      color: '#171717',
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#171717',
      marginRight: 8,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#B05867',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 8,
      backgroundColor: '#F7F7F7',
    },
    editButton: {
      backgroundColor: '#4CAF50',
      borderRadius: 4,
      padding: 8,
      marginRight: 8,
    },
    selectButton: {
      backgroundColor: '#2196F3',
      borderRadius: 4,
      padding: 8,
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
export default Laun;
