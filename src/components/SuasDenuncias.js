import React, { useState, useEffect } from 'react'
import { View, Button, Text, Image, TouchableOpacity, RefreshControl } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '../content/context'
import SemDenuncia from '../components/SemDenuncia'
import ComDenuncia from '../components/ComDenuncia'

import styles from '../styles/suasDenuncias'

const SuasDenuncias = ({ navigation }) => {

    const[denunciaArray, setdenunciaArray] = useState([])

    const denunciasUsuario = async (req, res) => {
            const denuncias = await fetch("http://localhost:3000/denuncia")
            const dadosJson = await denuncias.json()
            console.warn(dadosJson.length)
            console.log(dadosJson.length)
            
            
           setdenunciaArray(dadosJson)
    }

    useEffect(() =>{
        denunciasUsuario()
    }, [])


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flex}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <View style={{ width: 100, marginHorizontal: 10, marginTop: 13, marginBottom: 10 }}>
                                <Image
                                    source={require('../assets/fotoperfil.jpg')} style={styles.imgperfil}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.header}>
                            <Text style={styles.textHeader}>Suas Denúncias</Text>
                        </View>
                    </View>
                        {denunciaArray.length == 0 ? <SemDenuncia /> : <ComDenuncia/>}
                    

                        <TouchableOpacity onPress={() => navigation.navigate('Categoria')} style={styles.img}>
                        <Image
                            source={require('../assets/add-denuncia.png')}
                            resizeMode='contain'
                            style={styles.addButton}
                        />
                    </TouchableOpacity>
                        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SuasDenuncias