import React, {useState} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {firebase} from './Config' 
const UploadFileScreen = () => {
    const [image, setImage] = useState(null)
    const [uploading, setUploading] = useState(false) 
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        });
        const source = {uri: result.assets[0].uri}
        console.log(source)
        setImage(source)
    }; 
    const uploadImage = async () => {
        setUploading(true)
        const response = await fetch(image.uri)
        const blob = response.blob()
        const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
        var ref = firebase.storage().ref().child(filename).put(blob)
        try {
            await ref;
        } catch (e){
            console.log(e)
        }
        setUploading(false)
        Alert.alert(
            'Photo uploaded!'
        );
        setImage(null);
    } 
    return(
        <SafeAreaView >
  <TouchableOpacity  onPress={pickImage}
  style={styles.button}>
    <Text >Pick an Image</Text> 
  </TouchableOpacity> 
  <View >
   {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>} 
  <TouchableOpacity  onPress={uploadImage}
  style={styles.button}>
      <Text >Upload Image</Text> 
  </TouchableOpacity> 
  </View> 
</SafeAreaView> 
    )
}
const styles=StyleSheet.create({
    button:{
        alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
            elevation: 3,
            backgroundColor:'#D03D56',
            marginTop:50,
            maxWidth:170,
            height:50,
            marginLeft:110,
            marginBottom:30,
    }
})
export default UploadFileScreen;