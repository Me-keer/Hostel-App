import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import { FlatList } from 'react-native-gesture-handler';
import Addlaundry from './Addlaundry';
import History_laundry from './History_laundry';
import { Ionicons } from '@expo/vector-icons';
function laundry_finished(doc1){
  const dbRef = firebase.firestore().collection('Laundry')
        dbRef.onSnapshot(
      QuerySnapshot=>{
        QuerySnapshot.forEach((doc)=>{
            if(doc.data()['Register']===doc1.Register){
                console.log(doc.data()['Name'])
                doc.ref.set({

                    Name:doc1.Name,
                   Register:doc1.Register,
                   Weight:doc1.Weight,
                   currentDate:doc1.currentDate,
                   Amount:doc1.Amount,
                   Finished:'Yes'
                }).then(()=>{
                    Alert.alert("Record Updated");
                })
            }
        })
      }
        )
}
const  HomePage=()=>{
  const navigation=useNavigation()
  const [users,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Laundry');
  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const users=[]
        QuerySnapshot.forEach((doc)=>{
          if(doc.data().Finished==='No')
          users.push(doc.data())
        })
        setUsers(users)
      }
    )

  },[])


  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,alignItems:'center'}}>Laundry</Text>
        <FlatList
          data={users}
          numColumns={1}
          renderItem={({item})=>(
            <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.name}>{item.Name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Weight:</Text>
                <Text style={styles.price}>{item.Weight}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Amount:</Text>
                <Text style={styles.price}>{item.Amount}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Finished:</Text>
                <Text style={styles.price}>{item.Finished}</Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={ ( )=>laundry_finished(item)} style={styles.selectButton}>
                <Ionicons name="checkmark-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
            
          )}
        />
        <Text style={{paddingTop:40}}>
            
            <Button
            onPress = { ( )=>navigation.navigate('Addlaundry')}
        title="Add "
      />
        </Text>
        <Text style={{paddingTop:40}}>
        <Button
            onPress = { ( )=>navigation.navigate('History_laundry')}
        title="History "
      />
        </Text>
        </View>
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
export default HomePage;
