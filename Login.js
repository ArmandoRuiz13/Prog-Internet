//importacion de los objetos
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,TextInput} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
    };
  }

  render() {
      //programacion en JS de los objetos
    return (
      <View>
        <Text style={styles.textoudg}> UDG </Text>
        <Image style={styles.logoudg} source={require("./Imagenes/logoudg.png")}/>
        <TextInput style={styles.input} placeholder="codigo" />
        <TextInput style={styles.input} placeholder="nip" secureTextEntry={true}/>
      </View>
    );
  }
}//declaracion de variables
const styles = StyleSheet.create({
textoudg:{
fontSize:40,
color:"orange",
textAlign:"center",
},
logoudg:{
width:100,
height:200,
resizeMode:"contain",
marginLeft:160,
},
input:{
    borderWidth: 2,
    fontSize:25,
    marginTop:10
},
})