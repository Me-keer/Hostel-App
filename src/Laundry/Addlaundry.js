import {View,Text,TouchableOpacity,TextInput,StyleSheet,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import {firebase}from '../../Config'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
const Addlaundry=()=>{
    const registerUser1=async(Register,Name,Weight,Amount,currentDate,Finished)=>{
           await firebase.app().firestore().collection('Laundry')
            .add({
               Register,
               Name,
               Weight,
               Amount,
               currentDate,
               Finished
            }).then(()=>{
                Alert.alert("Laundry Registered");
                navigation.navigate('HomePage');
            })
        
}
        const [currentDate, setCurrentDate] = useState('');
      
        useEffect(() => {
          var date = new Date().getDate(); //Current Date
          var month = new Date().getMonth() + 1; //Current Month
          var year = new Date().getFullYear(); //Current Year
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
          var sec = new Date().getSeconds(); //Current Seconds
          setCurrentDate(
            date + '/' + month + '/' + year 
            + ' ' + hours + ':' + min + ':' + sec
          );
        }, []);
    const navigation=useNavigation()
    const [Name,setName]=useState('')
    const [Register,setRegister]=useState('')
    const [Weight,setWeight]=useState('')
    const [Amount,setAmount]=useState('')
    const Finished="No"

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={{fontWeigh:'bold','fontSize':23}}>
                Register Here!!
            </Text>
            <View style={{marginTop:40}}>
            <TextInput
                    style={styles.TextInput}
                    placeholder="Register Number"
                    onChangeText={(Register)=>setRegister(Register)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder=" Name"
                    onChangeText={(Name)=>setName(Name)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Weight"
                    onChangeText={(Weight)=>setWeight(Weight)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Amount"
                    onChangeText={(Amount)=>setAmount(Amount)}
                    autoCapitalize={false}
                    autoCorrect={false}
                />
            </View>
            <TouchableOpacity
                onPress={()=>registerUser1(Register,Name,Weight,Amount,currentDate,Finished)}
                style={styles.button}
            >
                <Text style={{fontWeight:'bold',fontSize:22}}>Register</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default Addlaundry
const styles=StyleSheet.create({
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