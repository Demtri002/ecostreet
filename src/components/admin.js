import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/admin'
// import { useUser } from '../content/context'

const FrontPaulo = () => {



    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    // const { userLogado, setUserLogado } = useUser()
    console.log(data)
    
    const getUsers = async () => {
        try{
            const response = await fetch('http://10.3.61.193:3000/users/')
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

  
    
    const getDenuncia = async () => {
        try{
            const response = await fetch('http://10.3.61.193:3000/denuncia/')
            const json = await response.json()
            setData(json)
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getDenuncia()
    }, [])
    const deleteDenuncia = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            header: { 'Content-type': 'application/json' }
        }

        try{

            console.log("ID:" + id)
            await fetch('http://10.3.61.193:3000/denuncia/' + id, requestOptions)
            setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de Denúncias</Text>
        
        
        <View style={styles.usersContainer}>
                    {isLoading  ? <ActivityIndicator /> : (
                        <FlatList style={styles.scrollView}
                            data={data} 
                            keyExtractor={({id} , index) => id} 
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={styles.text}> {item.id} {item.titulo} - {item.descricao}</Text>
                                    <TouchableOpacity
                                        onPress={() => deleteDenuncia(item.id)}    
                                    >
                                        <Text>Deletar</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    )}




        </View>
        </View>
        
        
    )
}

export default FrontPaulo