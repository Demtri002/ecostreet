import React, { useState } from 'react'
import {View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from '../styles/login'
import { useUser } from '../content/context'

const Login = ({navigation}) => {

    const[email, setEmail] = useState()
    const[senha, setSenha] = useState()
    const [error, setError] = useState(false)
    const { userLogado, setUserLogado } = useUser()

    const authUser = async (req, res) => {
            const dadosUsuario = await fetch("http://localhost:3000/users")
            const dadosJson =  await dadosUsuario.json()
            
            
            dadosJson.map(e =>{
                if(e.email == email && e.senha == senha){
    
                   setUserLogado(e)
                   
                     navigation.navigate('SuasDenuncias')
                }else{
                    setError(true)
                }
            
            })
        }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Image 
                    style={styles.imgHeader}
                    source={require('../assets/header.png')}
                />
            </View>
            <View>
               
                <Text style={styles.text1}>Bem-vindo(a) de volta!</Text>
                <Text style={styles.text2}>Faça login na sua conta!</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <Text style={styles.texterro}>{error == true ? 'Email ou senha inválidos' : ''}</Text>
                <TextInput style={styles.input} placeholder="Senha" onChange={e => setSenha(e.target.value)} secureTextEntry={true}/>
                <Text style={styles.texterro}>{error == true ? 'Email ou senha inválidos' : ''}</Text>

                <Text style={styles.recsenha} >Esqueceu sua senha?</Text>
            </View>
            <View style={styles.containerButton}>

            <TouchableOpacity style={styles.carcButton} onPress={authUser}>
                <Text style={styles.textButton} >Logar</Text>
            </TouchableOpacity>
                <View style={styles.display}>
                    <Text>Não tem uma conta?</Text>
                    <Text style={styles.p2} onPress={() => navigation.navigate("Cadastro")}> Cadastra-se</Text>
                </View>
            </View>

        </ScrollView>

    )
}

export default Login