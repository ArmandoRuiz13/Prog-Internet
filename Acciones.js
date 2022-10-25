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
    return (
      <View>
        <Text> Nombre:{recibir.nombre} </Text>
        <Text> Codigo:{recibir.codigo} </Text>
        <Button title='Altas' onPress={() => pasar.navigation.navigate("Altas",{nombre:recibir.nombre,codigo:recibir.codigo})}/>
        <Button title='Bajas' onPress={() => pasar.navigation.navigate("Bajas",{nombre:recibir.nombre,codigo:recibir.codigo})}/>
        <Button title='Cambios' onPress={() => pasar.navigation.navigate("Modificaciones",{nombre:recibir.nombre,codigo:recibir.codigo})} />
        <Button title='Lista' onPress={() => pasar.navigation.navigate("Pantalla2",{nombre:recibir.nombre,codigo:recibir.codigo})}/>
      </View>
    );
  }
}
