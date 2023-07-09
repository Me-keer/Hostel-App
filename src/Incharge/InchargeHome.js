import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import { FlatList } from 'react-native-gesture-handler';
function complaint_done(doc1){
    const dbRef = firebase.firestore().collection('Complaint')
          dbRef.onSnapshot(
        QuerySnapshot=>{
          QuerySnapshot.forEach((doc)=>{
              if(doc.data()['Complaint']===doc1.Complaint){
                  console.log(doc.data()['Name'])
                  doc.ref.set({
  
                      Name:doc1.Name,
                     Regno:doc1.Regno,
                     Room:doc1.Room,
                     Blockn:doc1.Blockn,
                     Complaint:doc1.Complaint,
                     Status:'yes'
                  }).then(()=>{
                      Alert.alert("Record Updated");
                  })
              }
          })
        }
          )
  }
const  InchargeHome=()=>{
  const navigation=useNavigation()
  const [complaints,setUsers]=useState([]);
  const todoRef=firebase.firestore().collection('Complaint');
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
        
        <FlatList
          data={complaints}
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
                <Text style={styles.priceLabel}>Complaint:</Text>
                <Text style={styles.price}>{item.Complaint}</Text>
              </View>
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
          )}
        />
        <Text style={{paddingTop:40}}>
            <Button
            onPress = { ( )=>navigation.navigate('History_complaints')}
        title="History "
      />
      </Text>
      <Text style={{paddingTop:80}}>
            <Button
            onPress = { ( )=>navigation.navigate('RoomChangeHome')}
        title="Room Change Requests "
      />
      </Text>
      <Text style={{paddingTop:40}}>
            <Button
            onPress = { ( )=>navigation.navigate('History_requests')}
        title="Room Change History "
      />
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{firebase.auth().signOut()}}
            >
                <Text style={styles.text}>
                    Sign out
                </Text>
            </TouchableOpacity>
        <Text ></Text>
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
  },
});
export default InchargeHome;
