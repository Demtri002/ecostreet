import React, { createContext, useContext, useState } from 'react'
import { validatePathConfig } from '@react-navigation/native'

const contextUser = createContext()
const contextDenuncia = createContext()
export default function ContextProvider({children}){
    const [userLogado,setUserLogado] = useState()
    const [userDenuncia, setUserDenuncia] = useState()

    return(
        <contextUser.Provider
            value={{
                userLogado,
                setUserLogado,
                userDenuncia,
                setUserDenuncia
            }}
        >
            {children}
        </contextUser.Provider>
    )
}

export function useUser(){
    const context = useContext(contextUser)
    const { userLogado, setUserLogado } = context
    return { userLogado,setUserLogado }
}
