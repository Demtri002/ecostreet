import React, { useState } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/denuncia';


    export default function Denuncia() {
        const [titulo, setTitulo] = useState('')
        const [descricao, setDescricao] = useState('')
        const [erro, setErro] = useState(false)

        const handleTituloChange = (titulo) => {setTitulo(titulo)}
        const handleDescricaoChange = (descricao) => {setDescricao(descricao)}

        const authDenuncia = async () => {
            if(titulo != '' || descricao != ''){
                try {
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify({
                            titulo : titulo,
                            descricao : descricao
                        })
                    }
                    await fetch('http://localhost:3000/denuncia/', requestOptions)
                } catch (error) {
                    console.log(error.message)
                } finally {
                    navigation.navigate('Login')
                }
            }else{
                setErro(true)                
            }
        }

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

                        
                        <TextInput style={styles.input} placeholder='Título' onChangeText={handleTituloChange}></TextInput>
                        <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>

                        <TextInput style={styles.desc} onChangeText={handleDescricaoChange} multiline={true} numberOfLines={10} placeholder='Descrição'></TextInput>
                        <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>

                        <TouchableOpacity style={styles.pickImg} onPress={openImagePickerAsync}>
                        <Text style={styles.pickImgText}>Escolher arquivos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={authDenuncia}> 
                                <Text style={styles.textButton}>Publicar</Text>
                        </TouchableOpacity>
                        
                </View>

                

            </ScrollView>
        </SafeAreaView>
    )
    }

                    


                   