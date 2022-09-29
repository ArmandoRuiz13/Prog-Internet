import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

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
      <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:50}}>
        <Text>id: {item.id}</Text>
        <Text>Nombre: {item.Nombre}</Text>
        <Text>Codigo: {item.Codigo}</Text>
        <Text>Tarea: {item.Tarea}</Text>
      </View>
      )
    }
    return (
      <View> 
        <Text> Bienvenido: {recibir.nombre}</Text>
        <Text> Codigo: {recibir.codigo} </Text>
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />

      </View>
    );
  }
}
