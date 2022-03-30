import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/comdenuncia';
import { FlatList } from 'react-native-gesture-handler';
import { useUser } from '../content/context'

const ComDenuncia = () => {
    const { userLogado, setUserLogado } = useUser()
    const [data, setData] = useState([])
    const { denuncia , setDenuncia} = useState('')

    const getDenuncia = async () => {
        try{
            const denuncias = await fetch("http://localhost:3000/denuncia")
            const dadosJson = await denuncias.json()
            
            console.log(dadosJson);
            
        }catch (error) {
            console.error(error)
        }finally{
            console.log('to aq');
                        
        }
        
}

        useEffect(() => {
            getDenuncia()
        }, [])

    return(
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>


                    {/* <Text style={styles.title}>{userLogado.titulo}</Text>
                    <Text style={styles.subtitle}>{userLogado.descricao}</Text> */}
                     <View style={styles.denunciaContainer}>
                            <View style={styles.miniContainer}>
                        <Text> {denuncia.titulo} - {denuncia.descricao}</Text>
                                </View>
                        </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default ComDenuncia