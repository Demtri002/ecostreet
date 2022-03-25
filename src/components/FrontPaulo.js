import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/frontpaulo'

const FrontPaulo = () => {



    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    console.log(data)
    
    const getUsers = async () => {
        try{
            const response = await fetch('http://localhost:3000/users/')
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

    const deleteUser = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            header: { 'Content-type': 'application/json' }
        }

        try{

            console.log("ID:" + id)
            await fetch('http://localhost:3000/users/' + id, requestOptions)
            setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de usuários</Text>
        
        <View style={styles.usersContainer}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList style={styles.scrollView}
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.text}> {item.id} - {item.nome} - {item.sobrenome} - {item.email} - {item.cpf}</Text>
                            <TouchableOpacity
                                onPress={() => deleteUser(item.id)}
                            >
                                <Text>DELETAR</Text>
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