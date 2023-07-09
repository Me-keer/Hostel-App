import React,{useState,useEffect} from 'react' 
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../../Config'

const Hel = () => {
    const navigation=useNavigation()
  const [users,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Healthcare');
  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const users=[]
        QuerySnapshot.forEach((doc)=>{
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
          <Text style={styles.priceLabel}>Contact:</Text>
          <Text style={styles.price}>{item.Contact}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Specialization:</Text>
          <Text style={styles.price}>{item.Specialization}</Text>
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
});

export default Hel;
