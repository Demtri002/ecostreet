import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import SuasDenuncias from '../components/SuasDenuncias'
import AboutUs from '../components/AboutUs'
import CustomDrawer from '../components/CustomDrawer'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Usuario from '../components/Usuario'
<<<<<<< HEAD
import  admin  from '../components/admin';


=======
import FrontPaulo from '../components/FrontPaulo'
import PauloNew from '../components/PauloNew'
import Admin from '../components/Admin'
>>>>>>> d3431b894d1f19ccdac8b6d2140fb578a1bf2322

const Drawer = createDrawerNavigator()

const RotaDrawer = () => {

    return(

            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props}/>}
                //Estilizar todos os links do Drawer
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#DFEEEA',
                    drawerActiveTintColor: 'black',
                    drawerInactiveTintColor: 'black',
                    drawerLabelStyle:
                     {fontSize: 16, padding:10, marginLeft: -30,}}}
            >

                <Drawer.Screen 
                 name='Suas denúncias'
                 component={SuasDenuncias}
                 options={{
                    drawerIcon: ({color}) => (
                       <MaterialIcons
                          name="house"
                          size={25}
                          color={color}
                       />
                    ),
                 }}
                 
                 />
                
              
                    
                    <Drawer.Screen 
                    name='Gerenciar perfil'
                    component={Usuario}
                    options={{
                        drawerIcon: ({color}) => (
                           <MaterialIcons
                              name="settings"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />

      <Drawer.Screen 
                    name='Sobre a Ecostreet'
                    component={AboutUs}
                    options={{
                        drawerIcon: ({color}) => (
                           <MaterialIcons
                              name="people-alt"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />

            <Drawer.Screen 
                    name='Admin'
                    component={Admin}
                    options={{
                        drawerIcon: ({color}) => (
                           <MaterialIcons
                              name="people-alt"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />
                  <Drawer.Screen 
                    name='Admin'
                    component={admin}
                    options={{
                        drawerIcon: ({color}) => (
                           <SimpleLineIcons
                              name="question"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />
            </Drawer.Navigator>
    )
}

export default RotaDrawer