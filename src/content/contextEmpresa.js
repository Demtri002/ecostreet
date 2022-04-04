// import React, { createContext, useContext, useState } from 'react'
// import { validatePathConfig } from '@react-navigation/native'

// const contextEmpresa = createContext()

// export default function ContextProvider({brother}){
//     const [empresaLogado, setEmpresaLogado] = useState()
   


//     return(
//         <contextEmpresa.Provider
//             value={{
//                 empresaLogado,
//                 setEmpresaLogado,
            
//             }}
//         >
//             {brother}
//         </contextEmpresa.Provider>
//     )
// }

// export function useEmpresa(){
//     const context = useContext(contextEmpresa)
//     const { empresaLogado, setEmpresaLogado } = context
//      return { empresaLogado,setEmpresaLogado }


// }