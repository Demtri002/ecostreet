import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#DFEEEA',
        flexDirection:'column'
    },
    text1: {
        marginTop: 60,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 70,
        textAlign: 'center',
        fontSize: 25
    },
    text2: {
        marginRight: 25,
        marginLeft: 25,
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        width: '80%',
        padding: 10,
        borderColor: 'green',
        borderBottomWidth: 2,
        borderBottomColor: '#0D0',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 45
    },
    containerButton:{
        alignItems: 'center'
    },
    carcButton: {
        marginTop: 40,
        borderRadius: 15,
        backgroundColor: '#00D192',
        width: '50%',
        padding: 10,
    },
    textButton: {
        color: 'white',
        textAlign:'center'
    },
    display: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    p2:{
        color:'#0000FF'
    },
    header:{
        padding:32,
        width: '100%',
        height: 135,
        backgroundColor: '#00D192',
        alignItems:'center'
    },
    imgHeader: {
        width: 200,
        height: 110
    }

})