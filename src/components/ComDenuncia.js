import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/comdenuncia';

const ComDenuncia = () => {
    return(
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>

            <View style={styles.denunciaContainer}>
            <View style={styles.miniContainer}>
                    <Text style={styles.title}>Lorem Ipsum</Text>
                    <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
            </View>

            <View style={styles.miniContainer}>
                    <Text style={styles.title}>Lorem Ipsum</Text>
                    <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
            </View>

            <View style={styles.miniContainer}>
                    <Text style={styles.title}>Lorem Ipsum</Text>
                    <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
            </View>
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

export default ComDenuncia