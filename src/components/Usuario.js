import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import styles from '../styles/usuario'


const Usuario = ({navigation}) => {

    
    


    return(
        <ScrollView>
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Image
                    source={require('../assets/header.png')}
                    style={styles.imgHeader}
                />
            </View> */}

            <Text style={styles.title}>Gerencie seus dados pessoais: </Text>

            <View style={styles.content}>
            <TextInput style={styles.input} placeholder='Nome:' ></TextInput>
            <TextInput style={styles.input} placeholder='Sobrenome:' ></TextInput>
            <TextInput style={styles.input} placeholder='Digite sua nova senha: ' ></TextInput>
            <TextInput style={styles.input} placeholder='Confirme sua nova senha:'></TextInput> 
            </View>
           
              
               
               <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Atualizar</Text>
               </TouchableOpacity>
              
        </View>
        </ScrollView>
    )
}

export default Usuario