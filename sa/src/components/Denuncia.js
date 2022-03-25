import React from 'react';
import { View, Text, Image, TextInput, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/denuncia';


//const denuncia = () => {
    export default function denuncia() {
   
        let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert('Permission to access camera roll is required!');
              return;
            }
        
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            console.log(pickerResult);
          };
    return(
        <SafeAreaView>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Preencha as informações da sua denúncia
                        </Text>
                    </View>

                <View>
                    <TextInput style={styles.input} placeholder='Título  * '></TextInput>
                    <TextInput style={styles.input} placeholder='Descrição  * '></TextInput>
                    

                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <Text style={styles.carcbutton}>Pick a photo</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

//export default denuncia