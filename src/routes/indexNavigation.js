import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../components/Cadastro'
import Login from '../components/Login'
import Drawer from './indexDrawer'
import Categoria from '../components/Categoria'
import Post from '../components/Post'
import Local from '../components/Local'
import FrontPaulo from '../components/FrontPaulo'
import Usuario from '../components/Usuario'
import Denuncia from '../components/Denuncia'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='Login'>
            
            <Stack.Screen 
                name='Login'
                component ={Login}
                options = {{
                    headerShown: true
                }}
            />

            <Stack.Screen
                name= 'Categoria'
                component={Categoria}
                options={{
                    headerShown: true
                }}
            />

            <Stack.Screen 
                name='Cadastro'
                component ={Cadastro}
                options = {{
                    headerShown: true
                }}
            />
            <Stack.Screen 
                name='SuasDenuncias'
                component={Drawer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='AboutUs'
                component={Drawer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Post'
                component={Post}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Local'
                component={Local}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen 
                name='FrontPaulo'
                component={FrontPaulo}
                options={{
                    headerShown: true
                }}
            />
               <Stack.Screen
                name= 'Usuario'
                component={Usuario}
                options={{
                    headerShown: true
                }}
            />
            
            <Stack.Screen
                name= 'Denuncia'
                component={Denuncia}
                options={{
                    headerShown: true
                }}
            />
            

        </Stack.Navigator>
    )
}