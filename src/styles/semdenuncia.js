import { StyleSheet } from 'react-native';

export default StyleSheet.create({

container: {
    flex:1,
},
centro:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
},
p1: {
    fontSize:25,
    textAlign:'center',
    marginBottom:25
},
p2:{
    fontSize:18,
    textAlign:'center',
    marginHorizontal:5
},
img:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical: 23
},

balao:{
    marginTop:30,
    marginBottom: 50,
    width: 130,
    height: 130,
    opacity:0.8
}, 

imgperfil: {
    width: 35,
    height: 35,
    marginTop:25,
    marginLeft: 10,
    borderRadius: 50
},
flex:{
    flexDirection:'row',
    backgroundColor:'#002F21'
},
header:{
    paddingTop:50,
    paddingBottom: 50,
},
textHeader: {
    color:'#fff',
    fontSize:17,
},

addButton:{
    width: 60,
    height: 60,
}
})