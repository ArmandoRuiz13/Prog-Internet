//importacion de los objetos
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
        codigo:"",
        nip:"",
    };
  }

  render() {
      //programacion en JS de los objetos
      const btnClick = () => {
        //pasar para otra ventana
        this.props.navigation.navigate("Pantalla2")



        /*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+this.state.codigo+"&nip="+this.state.nip, true);
xhttp.send();*/
      }
    return (
      <View style={styles.screen}>
        <Text style={styles.textoudg}> UDG </Text>
        <Image style={styles.logoudg} source={require("./Imagenes/logoudg.png")}/>
        <TextInput style={styles.input} placeholder="codigo" keyboardType='numeric' onChangeText={codigo => this.setState({codigo})}/>
        <TextInput style={styles.input} placeholder="nip" secureTextEntry={true} onChangeText={nip => this.setState({nip})}/>
        <View style={styles.boton}>
          <Button title="Ingresar" onPress={btnClick}></Button>
        </View>
      </View>
    );
  }
}//declaracion de variables
const styles = StyleSheet.create({
screen:{
  backgroundColor: "#434242",
  flex: 1,
},
textoudg:{
fontSize:50,
color:"orange",
textAlign:"center",
},
logoudg:{
width:120,
height:200,
resizeMode:"contain",
marginLeft:140,
},
input:{
    borderWidth: 2,
    fontSize:25,
    marginTop:10,
    marginHorizontal:10,
    padding: 10,
    backgroundColor:"red",
},
boton:{
  width:100,
  height:35.5,
  marginLeft:150,
  marginTop:30,
  backgroundColor: "orange",
},

})