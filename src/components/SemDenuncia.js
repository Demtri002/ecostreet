import React from 'react'

import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/semdenuncia';

const SemDenuncia = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.centro}>
                        <Image style={styles.balao}
                            source={require('../assets/balao.png')}
                            resizeMode='contain'
                        />
                        <Text style={styles.p1}>Ops! Parece que você não possui denúncias ativas!</Text>
                        <Text style={styles.p2}>Comece a denunciar clicando no botão abaixo!</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SemDenuncia
