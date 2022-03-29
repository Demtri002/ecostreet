import React, { useEffect } from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/comdenuncia';
import { FlatList } from 'react-native-gesture-handler';
import { useUser } from '../content/context'

const ComDenuncia = () => {
    const { userLogado, setUserLogado } = useUser()

    const getDenuncia = async () => {
        try{
            const response = await fetch('http://localhost:3000/denuncia/')
            const json = await response.json()
        }catch (error) {
            console.error(error)
        }finally{
            console.log('sla');
            
        }
}

        useEffect(() => {
            getDenuncia()
        }, [])

    return(
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>

            <View style={styles.denunciaContainer}>
            <View style={styles.miniContainer}>
                    <Text style={styles.title}>{userLogado.titulo}</Text>
                    <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
            </View>
            </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default ComDenuncia