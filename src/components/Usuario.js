import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import styles from '../styles/usuario'


const Usuario = ({navigation}) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    console.log(data)
    
    const getUsers = async () => {
        try{
            const response = await fetch('http://localhost:3000/usuario/')
            const json = await response.json()
            setData(json)
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            header: { 'Content-type': 'application/json' }
        }

        try{

            console.log("ID:" + id)
            await fetch('http://localhost:3000/usuario/' + id, requestOptions)
            setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }


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

       
            <TextInput style={styles.input} placeholder='E-mail:'></TextInput>
            <TextInput style={styles.input} placeholder='Senha antiga: '></TextInput>
            <TextInput style={styles.input} placeholder='Senha nova: '></TextInput>
            <TextInput style={styles.input} placeholder='Confirme sua nova senha:'></TextInput>
           
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.carcButton}>
                    <Text style={styles.textButton}>Editar</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.carcButton}>
                    <Text style={styles.textButton}>Atualizar</Text>
               </TouchableOpacity>
               <View style={styles.display}>
                 
               </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Usuario