import {View,Text,TouchableOpacity,TextInput,StyleSheet,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import {firebase}from '../../Config'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { Value } from 'react-native-reanimated';
const AddMess=()=>{
    const data = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' },
      ];
      const data1 = [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Dinner', value: 'Dinner' },
      ];
    const registerUser1=async(Day,Time,Menu)=>{
      const todoRef=firebase.firestore().collection('Mess');
      todoRef.onSnapshot(
        QuerySnapshot=>{
        QuerySnapshot.forEach((doc)=>{
          if(doc.data().Day===Day&&doc.data().Time===Time){
            doc.ref.set({
              Day:Day,
              Time:Time,
              Menu:Menu
          }).then(()=>{
              Alert.alert("Record Updated");
          })
          }
        })
      })
        
}
    const [value, setValue] = useState(null);
    const navigation=useNavigation()
    const [Menu,setMenu]=useState('')
    const [value1, setValue1] = useState(null);
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={{fontWeigh:'bold','fontSize':23}}>
                Register Here!!
            </Text>
            <View style={{marginTop:40}}>
            <Dropdown
                style={[styles.dropdown, { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder= 'Select Day'
                    value={value}
                    onChange={item => {
                        console.log(item.value);
                        setValue(item.value);
                    }}
            />
            <Dropdown
                style={[styles.dropdown, { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data1}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder= 'Select Time'
                    value={value1}
                    onChange={item => {
                        console.log(item.value);
                        setValue1(item.value);
                    }}
            />
            <TextInput
                    style={styles.TextInput}
                    placeholder="Enter the menu"
                    onChangeText={(Menu)=>setMenu(Menu)}
                    autoCorrect={false}
                />
            </View>
            <TouchableOpacity
                onPress={()=>registerUser1(value,value1,Menu)}
                style={styles.button}
            >
                <Text style={{fontWeight:'bold',fontSize:22}}>Edit menu</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default AddMess
const styles=StyleSheet.create({
      dropdown: {
        marginBottom:50,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,

    },
    TextInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'
    },
    button:{
        marginBottom:20,
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})