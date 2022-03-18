import React from 'react'
import { View, Button,Text, Image, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from '../styles/suasDenuncias'


const SuasDenuncias = ({navigation}) => {

    return(
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>
            <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View style={{width:100, marginHorizontal:10, marginTop:13, marginBottom:10}}>
                <Image
                    source={require('../assets/fotoperfil.jpg')} style={styles.imgperfil}
                />
                </View>
            </TouchableOpacity>
            <View style={styles.header}>
            <Text style={styles.textHeader}>Suas Denúncias</Text>
            </View>
            </View>
            
            <View style={styles.centro}>
                <Image style={styles.balao}
                    source={require('../assets/balao.png')}
                    resizeMode='contain'
                    />
                <Text style={styles.p1}>Ops! Parece que você não possui denúncias ativas!</Text>
                <Text style={styles.p2}>Comece a denunciar clicando no botão abaixo!</Text>
            </View>

            
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