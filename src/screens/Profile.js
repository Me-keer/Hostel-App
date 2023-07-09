import React from "react";
import {View,Text,Button} from 'react-native'

const Profile =() =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>
            <Button
        onPress={() => navigation.navigate('Complaint')}
        title="Go To "
      />
            </Text>
        </View>
    )
}

export default Profile