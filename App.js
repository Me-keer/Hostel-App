import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState,useEffect}from 'react';
import {firebase} from './Config';
import { View } from 'react-native';


import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import Admin  from "./src/Admin";
import HealthRegistration from "./src/Healthregistration";
import LaundryRegistration from "./src/LaundryRegistration";
import MessRegistration from "./src/MessRegistration";
import InchargeRegistration from "./src/InchargeRegistration";
import Student from "./src/Student";
import Add_contacts from "./src/Healthcare/Add_contacts";
import Contacts from "./src/Healthcare/Contacts";
import Edit_contacts from "./src/Healthcare/Edit_contacts";
import HomePage from "./src/Laundry/HomePage";
import Addlaundry from "./src/Laundry/Addlaundry";
import History_laundry from "./src/Laundry/History_laundry";
import MessPage from "./src/Mess/MessPage";
import Timelinemess from "./src/Mess/Timeline";
import AddMess from "./src/Mess/AddMess";
import InchargeHome from "./src/Incharge/InchargeHome";
import History_complaints from "./src/Incharge/History_complaints";
import UploadFileScreen from "./UploadFileScreen";
import RoomChangeHome from "./src/Incharge/RoomChangeHome";
import History_requests from "./src/Incharge/History_requests";
import Mess from "./src/students/Mess/Mess";
import Timelinem from "./src/students/Mess/Timeline";
const Stack=createStackNavigator();

function App(){
  const[initializing,setInitializing]=useState(true);
  const[user,setUser]=useState();
  const[name,setName]=useState('')
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },
  [])
  if(initializing)return null;
  
  if(!user){
    return(
     
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" component={Login} 
          options={{
            title:'CEG Hostel',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:25,
              color:'#fff',
              
            },
            headerTitleAlign: 'center',
          }}
        />
       
      </Stack.Navigator>
    );
  }
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
        if(snapshot.exists){
            setName(snapshot.data())

        }
        else{
            console.log('User does not exist')
        }
    })
  if(name.mode==="Admin"){
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Admin Page" component={Admin} 
          options={{
            title:'CEG Hostel',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
            }}
          />
           <Stack.Screen 
        name="Registration" component={Registration} 
        options={{
            title:'CEG Hostel',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
         <Stack.Screen 
        name="HealthRegistration" component={HealthRegistration} 
        options={{
            title:'CEG Hostel',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
         <Stack.Screen 
        name="LaundryRegistration" component={LaundryRegistration} 
        options={{
            title:'CEG Hostels',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
        name="MessRegistration" component={MessRegistration} 
        options={{
            title:'CEG Hostel',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
        name="InchargeRegistration" component={InchargeRegistration} 
        options={{
            title:'CEG Hostels',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
        name="UploadFileScreen" component={UploadFileScreen} 
        options={{
            title:'CEG Hostels',
            headerStyle:{
              height:100,
              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
        
        
      </Stack.Navigator>
    );
  }
  if(name.mode==="Student"){
    return(
    <Stack.Navigator>
      <Stack.Screen
      name="Student" component={Student} 
        options={{
            title:'CEG Hostel',
            headerStyle:{
              height:100,

              backgroundColor:'#40B5AD',
              shadowColor:'#000',
              elevation:25
            },
            headerTitleStyle:{
              fontSize:20,
              color:'#fff',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
        name="Mess" component={Mess} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />   
          <Stack.Screen
        name="Timelinemess" component={Timelinemess} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
    </Stack.Navigator>
    );
  }
  if(name.mode==="Laundry"){
    return(
      <Stack.Navigator>
          <Stack.Screen
        name="HomePage" component={HomePage} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="Addlaundry" component={Addlaundry} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="History_laundry" component={History_laundry} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
      </Stack.Navigator>
      );
  }
  if(name.mode==="Mess"){
    return(
      <Stack.Navigator>
          <Stack.Screen
        name="MessPage" component={MessPage} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />   
          <Stack.Screen
        name="Timelinemess" component={Timelinemess} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />   
          <Stack.Screen
        name="AddMess" component={AddMess} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />   
      </Stack.Navigator>
      );
  }
  if(name.mode==="Incharge"){
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="InchargeHome" component={InchargeHome} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="History_complaints" component={History_complaints} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="RoomChangeHome" component={RoomChangeHome} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="History_requests" component={History_requests} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
      </Stack.Navigator>
    )
  }
  if(name.mode==="HealthCare"){
    return(
      <Stack.Navigator>
          <Stack.Screen
        name="Contacts" component={Contacts} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="Add_contacts" component={Add_contacts} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
        name="Edit_contacts" component={Edit_contacts} 
          options={{
              title:'CEG Hostel',
              headerStyle:{
                height:100,
  
                backgroundColor:'#40B5AD',
                shadowColor:'#000',
                elevation:25
              },
              headerTitleStyle:{
                fontSize:20,
                color:'#fff',
              },
              headerTitleAlign: 'center',
            }}
          />
      </Stack.Navigator>
      );
  }
}
export default()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}