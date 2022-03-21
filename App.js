import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RoutesNavigation from './src/routes/indexNavigation'
import ContextProvider from './src/content/context'



const App = () => {

  return (
    <ContextProvider>
      <NavigationContainer>

        <RoutesNavigation />


      </NavigationContainer>
    </ContextProvider>

  )
}



export default App


