import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Acciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var pasar=this.props;
    let recibir= this.props.route.params
    const getItem=(nombreMono,codigoMono)=>{
      console.log(numeroCelda);
      //ir a la siguiente ventana con variables
      pasar=pasar.navigation.navigate("Pantalla2",{nombre:recibir.nombre,codigo:recibir.nombre})
    }
    return (
      <View>
        <Text> Nombre:{recibir.nombre} </Text>
        <Text> Codigo:{recibir.codigo} </Text>
        <Button title='Altas'/>
        <Button title='Bajas'/>
        <Button title='Cambios'/>
        <Button title='Lista' onPress={()=>getItem(item.recibir.nombre,item.recibir.codigo)}/>
      </View>
    );
  }
}
