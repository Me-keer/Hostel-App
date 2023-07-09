import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import { FlatList } from 'react-native-gesture-handler';
const  History_complaints=()=>{
  const navigation=useNavigation()
  const [users,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Complaint');
  useEffect(()=>{
    todoRef.onSnapshot(
      QuerySnapshot=>{
        const users=[]
        QuerySnapshot.forEach((doc)=>{
            console.log(doc.data().Name)
          if(doc.data().Status==='yes')
          users.push(doc.data())
        })
        setUsers(users)
      }
    )

  },[])


  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,alignItems:'center'}}>Complaint History</Text>
        <FlatList
          data={users}
          numColumns={1}
          renderItem={({item})=>(
            <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{item.Name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Register number:</Text>
          <Text style={styles.price}>{item.Regno}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Room number:</Text>
          <Text style={styles.price}>{item.Room}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Block:</Text>
          <Text style={styles.price}>{item.Blockn}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Complaint</Text>
          <Text style={styles.price}>{item.Complaint}</Text>
        </View>
      </View>
    </View>
          )}
        />
        <Text style={{paddingTop:40}}>
        <Button
            onPress = { ( )=>navigation.navigate('InchargeHome')}
        title="Back "
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
export default History_complaints;
