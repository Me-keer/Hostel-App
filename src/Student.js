import { Button, View,Text, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './students/Profile.js';
import Comp from './students/Coreg/Comp.js';
import Rc from './students/Roomc/Rc';
import Mess from './students/Mess/Mess.js';
import Timelinem from './students/Mess/Timeline.js';
import Laun from './students/Laundry/Laun.js';
import {firebase} from '../Config.js/';
import { ScrollView } from "react-native-gesture-handler";
import Hel from "./students/Health/Hel.js";
const Stack = createNativeStackNavigator();
const FirstScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mess Details"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Mess Details" component={Mess} />
      <Stack.Screen name="Timelinem" component={Timelinem} />
      <Stack.Screen name="Mess Details1" component={Mess} />
    </Stack.Navigator>
  );
};



function Laundry({navigation})
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Laundry Updates</Text>
    </View>
  );
}
function Health({navigation})
{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Health Center Updates</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const  Student=()=>{
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="MyProfile">
        <Drawer.Screen name="My Profile" component={Profile} />
        <Drawer.Screen name="Complaint Registration" component={Comp} />
        <Drawer.Screen name="Room Change Request" component={Rc}/>
        <Drawer.Screen name="Mess" component={FirstScreenStack}/>
        <Drawer.Screen name="Laundry Updates" component={Laun}/>
        <Drawer.Screen name="Health Center" component={Hel}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Student;
