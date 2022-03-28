import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import styles from '../styles/usuario'


const Usuario = ({navigation}) => {

    
    


    return(
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/header.png')}
                    style={styles.imgHeader}
                />
            </View>

            <Text style={styles.text1}>Edite suas informações: </Text>
            {/* <Text style={styles.text2}>Crie sua conta</Text> */}


            <TextInput style={styles.input} placeholder='Nome:' ></TextInput>
            <TextInput style={styles.input} placeholder='Sobrenome:' ></TextInput>
            <TextInput style={styles.input} placeholder='E-mail:'></TextInput>
            <TextInput style={styles.input} placeholder='Senha antiga: ' ></TextInput>
            <TextInput style={styles.input} placeholder='Senha nova: '></TextInput>
            <TextInput style={styles.input} placeholder='Confirme sua nova senha:'></TextInput>
           
           
                <TouchableOpacity style={styles.carcButton}>
                    <Text style={styles.textButton}>Editar</Text>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.carcButton}>
                    <Text style={styles.textButton}>Atualizar</Text>
               </TouchableOpacity>
               <View style={styles.display}>
                 
               
            </View>
        </View>
        </ScrollView>
    )
}

export default Usuario