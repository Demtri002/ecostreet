import React, { createContext, useContext, useState } from 'react'

const contextUser = createContext()
export default function ContextProvider({children}){
    const [userLogado,setUserLogado] = useState()

    return(
        <contextUser.Provider
            value={{
                userLogado,
                setUserLogado
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