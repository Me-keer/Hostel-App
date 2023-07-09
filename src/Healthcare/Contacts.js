import { Button, View,Text, Pressable ,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native';
import { doc, getDoc, QuerySnapshot } from "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';
import React,{useState,useEffect} from 'react' 
import { useNavigation } from '@react-navigation/native';
import {firebase}from '../../Config'
import Add_contacts from './Add_contacts';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
function deleteuser(Name){
  const dbRef = firebase.firestore().collection('Healthcare')
        dbRef.onSnapshot(
      QuerySnapshot=>{
        QuerySnapshot.forEach((doc)=>{
            if(doc.data()['Name']===Name){
                console.log(doc.data()['Name'])
                doc.ref.delete()
                    Alert.alert("Contact Deleted");
            }
        })
      }
    )
}
const  Contacts=()=>{
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
    <View style={{justifyContent:'center',alignItems:'center'}}>
      
      
        <Text style={{fontSize:20,paddingLeft:30, paddingTop:20,paddingBottom:10, flexDirection:'row'}}>HealthCare</Text>
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
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={ ( )=>navigation.navigate('Edit_contacts',{name:item.Name,Contact:item.Contact,Specialization:item.Specialization})} style={styles.editButton}>
                <Ionicons name="pencil" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress=  { ( )=>deleteuser(item.Name)} style={styles.selectButton}>
                <Ionicons name="trash" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          )}
        />
        <Text style={{paddingTop:40}}>
            
            <Button
            onPress = { ( )=>navigation.navigate('Add_contacts')}
        title="Add "
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
        </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 16,
    backgroundColor: '#8cd2cd',
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
    backgroundColor: '#B05867',
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
    marginLeft:100,
  },
});
export default Contacts;
