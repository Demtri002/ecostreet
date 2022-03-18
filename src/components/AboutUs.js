import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import stylesHeader from '../styles/suasDenuncias'
import styles from '../styles/aboutus';

const AboutUs = ({navigation}) => {

    return(

    <SafeAreaView>
    <ScrollView style={stylesHeader.scroller}>
        <View style={stylesHeader.flex}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View style={{width:100, marginHorizontal:10, marginTop:13, marginBottom:10}}>
                <Image
                    source={require('../assets/fotoperfil.jpg')} style={stylesHeader.imgperfil}
                />
                </View>
            </TouchableOpacity>
            <View style={stylesHeader.header}>
            <Text style={stylesHeader.textHeader}>Sobre a EcoStreet</Text>
            </View>
            </View>


            
        <View style={styles.container}>
        
            <Image
                style={styles.logoSn}
                source={require('../assets/logo_sn.png')}
            />

            <Text style={styles.title}>O que é a ECOSTREET?</Text>
            <View style={styles.contentContainer}>

            
            <Text style={styles.content}>
            Um aplicativo que tem como objetivo principal ajudar inicialmente a população 
            de Florianópolis a expor e denunciar situações de obras inacabadas, buracos, 
            vazamentos de esgoto dentre outros problemas presentes nas estradas da cidade.</Text>

            <Text style={styles.content}> Nossa ideia é utilizar da praticidade das tecnologias presentes 
                nos telefones celulares para conectar cada vez mais pessoas para que estas 
                possam reportar os problemas sem solução que encontrarem.</Text>

                <Text style={styles.content}>Dessa forma, nós visamos criar um aplicativo que 
                traga uma forma interativa e entusiasmante de reunir grandes quantidades de denúncia, 
                chamando a atenção dos órgãos competentes para que no final elas possam ser resolvidas.</Text>
                </View>
            <View style={styles.icons}>
                <Image
                style={styles.iconsImg}
                source={require('../assets/instagram.png')}
                />
                <Image
                style={styles.iconsImg}
                source={require('../assets/gmail.png')}
                />
                <Image
                style={styles.iconsImg}
                source={require('../assets/linkedin.png')}
                />
            </View>
            <Text style={styles.finalText}>
            ECOSTREET© TODOS OS DIREITOS RESERVADOS
            </Text>
        </View>
    </ScrollView>
    </SafeAreaView>
    )
}

export default AboutUs