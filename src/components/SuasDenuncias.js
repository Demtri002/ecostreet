import React, { useState } from 'react'
import { View, Button,Text, Image, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '../content/context'

import styles from '../styles/suasDenuncias'


const SuasDenuncias = ({navigation}) => {
    const { userLogado, setUserLogado } = useUser()
    const [semDenuncia, setSemDenuncia] = useState(false)
    const [comDenuncia, setComDenuncia] = useState(false)
    const [comDenuncia, setComDenuncia] = useUser()

    function contSem (props) {
    if(!props.contSem){
        return  <View style={styles.container}>
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
    }
    }
        function contCom(props)  {
         if(!props.contCom   )
        return <View style={styles.container2}>

        <View style={styles.denunciaContainer}>
        <View style={styles.miniContainer}>
                <Text style={styles.title}></Text>
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
    }

    const authSuasDenuncias = async (props) => {
        const comDenuncias = props.comDenuncias
        const dadosUsuario = await fetch("http://localhost:3000/denuncia")
            const dadosJson =  await dadosUsuario.json()
            if(comDenuncias){
                return <contCom/>;
            }else{
                return <contSem />;
            }
        }

    return(
        <SafeAreaView>
            <ScrollView>
                <View>{authSuasDenuncias}</View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SuasDenuncias