import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1,
    },

    title: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 25
    },

    content:{
        marginTop: 50,
        alignItems: 'center',
        width: '100%',
        
    },

   
    input:{
        width: '80%',
        padding: 10,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderBottomWidth: 2,
        borderBottomColor: '#A4EFC1',
    },

   
    button:{
        width: '80%',
        marginTop: 100,
        backgroundColor: '#0F644D',
        borderRadius: 25
    },

    textButton:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    },
    

})