import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
    };
  }
  componentDidMount(){
    let _this = this
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
      var result=(xhttp.responseText);   
      console.log(result);
      var datos= JSON.parse(result);
      _this.setState({datosServer:datos});
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/MostrarDatos.php", true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    let recibir= this.props.route.params
    const celda =({item})=>{
      return(
      <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:80}}>
        <Text  style={styles.texts}>ID: {item.id}</Text>
        <Text style={styles.texts} >Nombre: {item.Nombre}</Text>
        <Text style={styles.texts}>Codigo: {item.Codigo}</Text>
        <Text style={styles.texts}>Tarea: {item.Tarea}</Text>
      </View>
      )
    }
    return (
      <View> 
        <Text style={styles.textst}> Bienvenido: {recibir.nombre}</Text>
        <Text style={styles.textst}> Codigo: {recibir.codigo} </Text>
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  texts:{
    fontSize:20,
    color:"orange",
    backgroundColor:"gray",
  },
  textst:{
    fontSize:20,
    color:"red",
    backgroundColor:"black",
  }
});

