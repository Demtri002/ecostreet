import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header:{
        padding:32,
        width: '100%',
        height: 135,
        backgroundColor: '#002f21',
        alignItems:'center'
    },
    imgHeader: {
        width: 200,
        height: 110
    },

    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#dfeeea'
    },

    logoSn:{
        padding: 10,
        width: 120,
        height: 122,
        marginTop: 15,
        marginBottom: 10
    },
    title:{
        fontSize: 30,
        color: '#0D0F12',

    },
    contentContainer:{
        marginHorizontal: 25,
    },
    content:{
        fontSize: 20,
        textAlign: 'justify',
        marginTop: 20,
        color: '#002f21'
    },

    
    icons:{
        flexDirection: 'row',
        marginTop: 40,
        borderColor: '#000',
        
        
    },
    iconsImg:{
        marginHorizontal: 15,
        width: 40,
        height: 40,
    },

    finalText:{
        marginTop: 15,
        marginBottom: 15,
        fontSize: 10,
        color: '#0d0f12'
    }
})
