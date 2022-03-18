import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import RoutesNavigation from './src/routes/indexNavigation'




const App = () => {

  return(
    <NavigationContainer>
        
        <RoutesNavigation />
        

    </NavigationContainer>

)
}



export default App